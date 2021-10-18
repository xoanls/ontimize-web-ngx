import { Overlay, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectorRef, ComponentRef, ElementRef, Injectable, OnDestroy, Renderer2 } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { IOContextMenuClickEvent, IOContextMenuContext } from '../../interfaces/o-context-menu.interface';
import { OContextMenuContentComponent } from './context-menu/o-context-menu-content.component';
import { OContextMenuOverlayService } from './o-context-menu-overlay.service';

@Injectable()
export class OContextMenuService implements OnDestroy {

  public showContextMenu: Subject<IOContextMenuClickEvent> = new Subject<IOContextMenuClickEvent>();
  public closeContextMenu: Subject<Event> = new Subject();
  protected subscription: Subscription = new Subscription();

  constructor(
    private overlay: Overlay,
    private scrollStrategy: ScrollStrategyOptions,
    private cd: ChangeDetectorRef,
    private overlayService: OContextMenuOverlayService,
    private renderer: Renderer2
  ) { }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openContextMenu(context: IOContextMenuContext): void {
    this.destroyOverlays();
    this.createOverlay(context);
  }

  protected destroyOverlays(): void {
    this.overlayService.destroyOverlays();
  }

  // Create overlay and attach `o-context-menu-content` to it in order to trigger the menu click, the menu opens in a new overlay
  // TODO: try to use only one overlay
  protected createOverlay(context: IOContextMenuContext): void {
    // const rect = (context.event.target as HTMLElement).getBoundingClientRect();


    // this.fakeElement.nativeElement.getBoundingClientRect = (): DOMRect => ({
    //   bottom: context.anchorElement.clientY,
    //   height: 0,
    //   left: context.event.clientX,
    //   right: context.event.clientX,
    //   top: context.event.clientY,
    //   width: 0,
    // });
    // { x: rect.left, y: rect.top }
    const p = { x: context.event.clientX, y: context.event.clientY }


    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(p)
      .withPositions([{
        overlayX: 'start',
        overlayY: 'top',
        originX: 'start',
        originY: 'bottom'
      }]);

    const overlayRef = this.overlay.create({
      positionStrategy: positionStrategy,
      hasBackdrop: false,
      panelClass: ['o-context-menu'],
      scrollStrategy: this.scrollStrategy.close()
    });

    this.overlayService.addOverlay(overlayRef);

    this.attachContextMenu(overlayRef, context);

    // setTimeout(() => {
    //   // Workaround to delete first level menu trigger
    //   overlayRef.hostElement.classList.add('overlay-ref-display-none');
    //   const nextSibling = overlayRef.hostElement.nextElementSibling;
    //   if (nextSibling) {
    //     const top = nextSibling.getBoundingClientRect().top;
    //     this.renderer.setStyle(nextSibling, 'top', `${top - 32}px`);
    //   }

    this.cd.detectChanges();
    // })
  }

  protected attachContextMenu(overlay: OverlayRef, context: IOContextMenuContext): void {
    const contextMenuContent: ComponentRef<OContextMenuContentComponent> = overlay.attach(new ComponentPortal(OContextMenuContentComponent));
    // contextMenuContent.instance.overlay = overlay;
    contextMenuContent.instance.menuItems = context.menuItems;
    contextMenuContent.instance.externalMenuItems = context.externalMenuItems;
    contextMenuContent.instance.data = context.data;
    contextMenuContent.instance.menuClass = context.class;
    this.subscription.add(contextMenuContent.instance.close.subscribe(() => {
      this.closeContextMenu.next();
      this.destroyOverlays();
    }));
  }

}
