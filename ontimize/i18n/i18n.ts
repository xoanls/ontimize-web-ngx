export var MAP = {

  // English

  'en': {
    'LANGUAGE': 'Language',
    'LOCALE_en': 'EN',
    'LOCALE_es': 'ES',
    'USERNAME': 'Username',
    'PASSWORD': 'Password',
    'LOGIN': 'Login',
    'LOGOUT': 'Logout',
    'OK': 'Ok',
    'ACCEPT': 'Accept',
    'CANCEL': 'Cancel',
    'CLOSE': 'Close',
    'YES': 'Yes',
    'NO': 'No',
    'RESET': 'Reset',
    'CONFIRM': 'Confirm',
    'NEXT': 'Next',
    'PREVIOUS': 'Previous',
    'FINISH': 'Finish',
    'SAVE': 'Save',
    'REFRESH': 'Refresh',
    'SEARCH': 'Search',
    'FILTER': 'Filter',
    'DELETE': 'Delete',
    'ADD': 'New',
    'SELECT': 'Select',
    'SELECT_ALL': 'Select all',
    'INFO': 'Information',
    'ERROR': 'Error',
    'FOUND': 'Found',
    'RESULTS': 'Results',
    'TOTAL': 'Total',
    'MONEY': 'Money',
    'HOME': 'Home',
    'SHOW_CONSOLE': 'Show console',
    'FILE': 'File',
    'OPTIONS': 'Options',
    'EDIT': 'Edit',
    'UNDO': 'Undo',
    'REDO': 'Redo',
    'COPY': 'Copy',
    'PASTE': 'Paste',
    'LOCK': 'Lock',
    'EXIT': 'Exit',
    'SETTINGS': 'Settings',
    'FORM': 'Form',
    'LIST': 'List',
    'LIST.EMPTY': 'No results found',
    'LIST.EMPTY_USING_FILTER': ' using filter "{0}"',

    'TABLE': 'Table',
    'DETAIL': 'Detail',
    'PAGE': 'Page',
    'FIRST_PAGE': 'First',
    'LAST_PAGE': 'Last',
    'PREVIOUS_PAGE': 'Previous',
    'NEXT_PAGE': 'Next',
    'PHOTO': 'Picture',
    'CHOOSE_FILE': 'Choose file',

    'FORM_VALIDATION.REQUIRED': 'Required',
    'FORM_VALIDATION.LENGTH': 'Invalid length',
    'FORM_VALIDATION.MIN_LENGTH': 'Minimum length',
    'FORM_VALIDATION.MAX_LENGTH': 'Maximum length',
    'FORM_VALIDATION.MIN_DECIMAL_DIGITS': 'Minimum number of decimal digits',
    'FORM_VALIDATION.MAX_DECIMAL_DIGITS': 'Maximum number of decimal digits',
    'FORM_VALIDATION.EMAIL_FORMAT': 'Invalid email',
    'FORM_VALIDATION.NIF_FORMAT': 'Invalid format (DNI: 12345678-A, NIE: X-1234567-A)',
    'FORM_VALIDATION.DNI_LETTER': 'Invalid DNI letter',
    'FORM_VALIDATION.DATE_RANGE': 'Date outside valid range',
    'FORM_VALIDATION.MIN_VALUE': 'Minimum value',
    'FORM_VALIDATION.MAX_VALUE': 'Maximum value',

    'FORM_VALIDATION.DATE_PARSE': 'Date not valid format',
    'FORM_VALIDATION.DATE_FILTER': 'Date is not valid for the defined filter',
    'FORM_VALIDATION.DATE_MIN': 'Date min',
    'FORM_VALIDATION.DATE_MAX': 'Date max',

    'FORM_VALIDATION.FILE_TYPE': 'Invalid format',
    'FORM_VALIDATION.FILE_MAXSIZE': 'Maximum file size',
    'FORM_VALIDATION.FILE_MAXNUM': 'Max. files',
    'FORM_VALIDATION.HOUR_FORMAT': 'Format not valid format',
    'MESSAGES.FORM_VALIDATION_ERROR': 'Form values are not valid!',
    'MESSAGES.FORM_NOTHING_TO_UPDATE_INFO': 'There are no values to update!',
    'MESSAGES.FORM_CHANGES_WILL_BE_LOST': 'Are you sure you want to continue? All unsaved changes will be lost',
    'MESSAGES.ERROR_LOGIN': 'Login failed. Check username and/or password.',
    'MESSAGES.ERROR_SESSION': 'Session expired.',
    'MESSAGES.ERROR_INSERT': 'Failed to insert data.',
    'MESSAGES.ERROR_QUERY': 'Failed to get data from the server.',
    'MESSAGES.ERROR_UPDATE': 'Failed to save data.',
    'MESSAGES.ERROR_DELETE': 'Failed to delete data.',
    'MESSAGES.ERROR_ATTRIBUTE_REQUIRED': 'Required attribute not set.',
    'MESSAGES.ERROR_FILE_LOAD': 'Failed to load file.',
    'MESSAGES.CONFIRM_ACTION': 'Are you sure you want to continue?',
    'MESSAGES.CONFIRM_LOGOUT': 'Are you sure you want to leave?',
    'MESSAGES.CONFIRM_DELETE': 'Are you sure you want to delete the selected items?',
    'MESSAGES.CONFIRM_CANCEL': 'Are you sure you want to cancel without saving changes?',
    'MESSAGES.SAVING': 'Saving, please wait...',
    'MESSAGES.SAVED': 'Saved',
    'MESSAGES.DELETED': 'Deleted',
    'MESSAGES.INSERTED': 'Inserted',
    'MESSAGES.UPDATED': 'Updated',
    'MESSAGES.NO_RESULTS': 'No results were obtained.',
    'MESSAGES.ERROR_MISSING_LANG': 'Selected language bundle file not found',
    'MESSAGES.CONFIRM_DISCARD_FILTER_BY_COLUMN': 'Are you sure you want to discard all active columns filters?',
    'MESSAGES.ERROR_EXPORT_TABLE_DATA': 'Failed to export table data.',
    'MESSAGES.SUCCESS_EXPORT_TABLE_DATA': 'Table data exported successfully.',
    'INPUT.COMBO.MESSAGE_TRIGGER': ' (+{0} others)',
    'TABLE.FILTER_BY_COLUMN.CHECK_ALL': 'Select all',
    'TABLE.FILTER_BY_COLUMN.EMPTY_VALUE': '(empty value)',
    'TABLE.FILTER_BY_COLUMN.HINT_STAR': 'Use * to search for any character string',
    'TABLE.FILTER_BY_COLUMN.BY_VALUE': 'Filter by value',
    'TABLE.FILTER_BY_COLUMN.CUSTOM_FILTER': 'Custom filter',
    'TABLE.FILTER_BY_COLUMN.FROM': 'From',
    'TABLE.FILTER_BY_COLUMN.TO': 'To',
    'TABLE.FILTER_BY_COLUMN.LIST_EMPTY': 'No values',
    'TABLE.FILTER_BY_COLUMN.LIST_EMPTY_FILTER': 'Insert a filter',
    'TABLE.FILTER': 'Filter',
    'TABLE.FILTER.CASE_SENSITIVE': 'Match uppercase and lowercase',
    'TABLE.EMPTY': 'No results found',
    'TABLE.EMPTY_USING_FILTER': ' using filter "{0}"',
    'TABLE.INFO': '_START_ - _END_ of _TOTAL_',
    'TABLE.INFO_EMPTY': '0 - 0 of 0',
    'TABLE.INFO_FILTERED': '(filtered from _MAX_ total entries)',
    'TABLE.INFO_POST_FIX': ' ',
    'TABLE.LENGTH_MENU': 'Rows per page: _MENU_',
    'TABLE.LOADING_RECORDS': 'Loading...',
    'TABLE.PROCESSING': 'Processing...',
    'TABLE.SEARCH': ' ',
    'TABLE.ZERO_RECORDS': 'No matching records found',
    'TABLE.PAGINATE.FIRST': 'First',
    'TABLE.PAGINATE.LAST': 'Last',
    'TABLE.PAGINATE.NEXT': 'Next',
    'TABLE.PAGINATE.PREVIOUS': 'Previous',
    'TABLE.PAGINATE.RANGE_LABEL': 'of',
    'TABLE.PAGINATE.ITEMSPERPAGELABEL': 'Items per page',
    'TABLE.ARIA.SORT_ASCENDING': ': activate to sort column ascending',
    'TABLE.ARIA.SORT_DESCENDING': ': activate to sort column descending',
    'TABLE.BUTTONS.COLVIS': 'Show / hide columns',
    'TABLE.BUTTONS.COPY_TITLE': 'Added to clipboard',
    'TABLE.BUTTONS.COPY_SUCCESS._': '%d rows copied',
    'TABLE.BUTTONS.COPY_SUCCESS.1': '1 row copied',
    'TABLE.BUTTONS.COPY_TO_CLIPBOARD': 'Copy to clipboard',
    'TABLE.BUTTONS.PRINT': 'Print',
    'TABLE.BUTTONS.EXPORT': 'Export',
    'TABLE.BUTTONS.EXCEL': 'Excel',
    'TABLE.BUTTONS.HTML': 'HTML',
    'TABLE.BUTTONS.PDF': 'PDF',
    'TABLE.BUTTONS.GROUP_ROWS': 'Group rows',
    'TABLE.BUTTONS.RESIZE_COLUMNS': 'Resize columns',
    'TABLE.BUTTONS.FILTER': 'Filter',
    'TABLE.BUTTONS.FILTER_SAVE': 'Save filter',
    'TABLE.BUTTONS.FILTER_LOAD': 'Load filter',
    'TABLE.BUTTONS.FILTER_CLEAR': 'Clear filter',
    'TABLE.BUTTONS.REFRESH': 'Refresh',
    'TABLE.BUTTONS.DELETE': 'Delete',
    'TABLE.BUTTONS.ADD': 'New',
    'TABLE.BUTTONS.SELECT': 'Select...',
    'TABLE.BUTTONS.FILTER_BY_COLUMN': 'Filter by column',
    'TABLE.BUTTONS.SAVE_FILTER': 'Save filter',
    'TABLE.BUTTONS.CONFIGURATION': 'Configuration',
    'TABLE.BUTTONS.SAVE_CONFIGURATION': 'Save configuration',
    'TABLE.BUTTONS.APPLY_CONFIGURATION': 'Load configuration',
    'TABLE.BUTTONS.APPLY': 'Load',
    'TABLE.SELECT.ROWS._': '%d selected rows',
    'TABLE.SELECT.ROWS.0': ' ',
    'TABLE.SELECT.ROWS.1': '1 row selected',
    'TABLE.SHOW_ALL': 'All',
    'TABLE.SELECT_DATE': 'Select date',
    'TABLE.ROW_VALIDATION_ERROR': 'Row data is not valid!',
    'TABLE.DIALOG.SAVE_FILTER': 'Select a name for the filter.',
    'TABLE.DIALOG.FILTER_NAME': 'Name',
    'TABLE.DIALOG.FILTER_DESCRIPTION': 'Description',
    'TABLE.DIALOG.LOAD_FILTER': 'Select a filter to apply to the table',
    'TABLE.DIALOG.CONFIRM_CLEAR_FILTER': 'This acction will clear every filter on the table. Are you sure you want to continue?',
    'TABLE.DIALOG.CONFIRM_REMOVE_FILTER': 'Are you sure you want to delete the selected filter?',
    'TABLE.DIALOG.EMPTY_FILTER_LIST': 'There are no filters stored',
    'TABLE.DIALOG.FILTER_NAME_ALREADY_EXISTS': 'Already exists a filter with that name',
    'TABLE.DIALOG.SAVE_CONFIGURATION': 'Enter a name and description for the configuration',
    'TABLE.DIALOG.CONFIGURATION_NAME': 'Name',
    'TABLE.DIALOG.CONFIGURATION_DESCRIPTION': 'Description',
    'TABLE.DIALOG.APPLY_CONFIGURATION': 'Select a configuration to apply to the table',
    'TABLE.DIALOG.APPLY_CONFIGURATION_DEFAULT': 'Default configuration',
    'TABLE.DIALOG.APPLY_CONFIGURATION_DEFAULT_DESCRIPTION': 'Restores the initial configuration of the table',
    'TABLE.DIALOG.CONFIGURATION_PROPERTIES': 'Select which properties you want to store',
    'TABLE.DIALOG.PROPERTIES.SORT': 'Columns sort',
    'TABLE.DIALOG.PROPERTIES.COLUMNS_DISPLAY': 'Columns display',
    'TABLE.DIALOG.PROPERTIES.QUICK_FILTER': 'Quick-filter state',
    'TABLE.DIALOG.PROPERTIES.COLUMNS_FILTER': 'Filter by column',
    'TABLE.DIALOG.PROPERTIES.PAGE': 'Paging status',
    'TABLE.DIALOG.CONFIRM_REMOVE_CONFIGURATION': 'Are you sure you want to delete the selected configuration?',
    'TABLE.DIALOG.EXPORT.DESCRIPTION': 'Select the format you want to export the table information.',
    'LAYOUT_MANANGER.MAIN_TAB_LABEL': 'Home',
    'LAYOUT_MANANGER.DIALOG_TITLE': 'Detail',
    'LAYOUT_MANANGER.INSERTION_MODE_TITLE': 'New',
    'APP_LAYOUT.USER_PROFILE': 'My profile',
    'CARD_MENU_LAYOUT.BUTTON_TEXT': 'View list',
    'GRID.ITEMS_PER_PAGE': 'Items per page',
    'GRID.SORT_BY': 'Sort by',
    'GRID.BUTTON_NEXT': 'Show more',
    'GRID.TEXT_SHOWN_ITEMS': '{0} / {1}'
  },

  // Spanish

  'es': {
    'LANGUAGE': 'Idioma',
    'LOCALE_en': 'EN',
    'LOCALE_es': 'ES',
    'USERNAME': 'Usuario',
    'PASSWORD': 'Contraseña',
    'LOGIN': 'Entrar',
    'LOGOUT': 'Salir',
    'OK': 'Ok',
    'ACCEPT': 'Aceptar',
    'CANCEL': 'Cancelar',
    'CLOSE': 'Cerrar',
    'YES': 'Sí',
    'NO': 'No',
    'RESET': 'Resetear',
    'CONFIRM': 'Confirmar',
    'NEXT': 'Siguiente',
    'PREVIOUS': 'Anterior',
    'FINISH': 'Finalizar',
    'SAVE': 'Guardar',
    'REFRESH': 'Refrescar',
    'SEARCH': 'Buscar',
    'FILTER': 'Filtrar',
    'DELETE': 'Borrar',
    'ADD': 'Nuevo',
    'SELECT': 'Seleccionar',
    'SELECT_ALL': 'Seleccionar todo',
    'INFO': 'Información',
    'ERROR': 'Error',
    'FOUND': 'Encontrados',
    'RESULTS': 'Resultados',
    'TOTAL': 'Total',
    'MONEY': 'Dinero',
    'HOME': 'Inicio',
    'SHOW_CONSOLE': 'Mostrar consola',
    'FILE': 'Archivo',
    'OPTIONS': 'Opciones',
    'EDIT': 'Editar',
    'UNDO': 'Deshacer',
    'REDO': 'Rehacer',
    'COPY': 'Copiar',
    'PASTE': 'Pegar',
    'LOCK': 'Bloquear',
    'EXIT': 'Salir',
    'SETTINGS': 'Configuración',
    'FEATURES': 'Características',
    'FORM': 'Formulario',
    'LIST': 'Lista',
    'LIST.EMPTY': 'No se han obtenido resultados',
    'LIST.EMPTY_USING_FILTER': ' usando el filtro "{0}"',

    'TABLE': 'Tabla',
    'DETAIL': 'Detalle',
    'PAGE': 'Página',
    'FIRST_PAGE': 'Primera',
    'LAST_PAGE': 'Última',
    'PREVIOUS_PAGE': 'Anterior',
    'NEXT_PAGE': 'Siguiente',
    'PHOTO': 'Fotografía',
    'CHOOSE_FILE': 'Escoger fichero',

    'FORM_VALIDATION.REQUIRED': 'Requerido',
    'FORM_VALIDATION.LENGTH': 'Longitud no válida',
    'FORM_VALIDATION.MIN_LENGTH': 'Longitud mínima',
    'FORM_VALIDATION.MAX_LENGTH': 'Longitud máxima',
    'FORM_VALIDATION.MIN_DECIMAL_DIGITS': 'Mínimo número de cifras decimales',
    'FORM_VALIDATION.MAX_DECIMAL_DIGITS': 'Mínimo número de cifras decimales',
    'FORM_VALIDATION.EMAIL_FORMAT': 'Email no válido',
    'FORM_VALIDATION.NIF_FORMAT': 'Formato no válido (DNI: 12345678-A, NIE: X-1234567-A)',
    'FORM_VALIDATION.DNI_LETTER': 'Letra de DNI no válida',
    'FORM_VALIDATION.DATE_RANGE': 'Fecha fuera del rango válido',
    'FORM_VALIDATION.MIN_VALUE': 'Valor mínimo',
    'FORM_VALIDATION.MAX_VALUE': 'Valor máximo',

    'FORM_VALIDATION.DATE_PARSE': 'Formato no válido',
    'FORM_VALIDATION.DATE_FILTER': 'Fecha no es válida para el filtro definido',
    'FORM_VALIDATION.DATE_MIN': 'Fecha mínima',
    'FORM_VALIDATION.DATE_MAX': 'Fecha máxima',

    'FORM_VALIDATION.FILE_TYPE': 'Formato no válido',
    'FORM_VALIDATION.FILE_MAXSIZE': 'Tamaño de fichero máximo',
    'FORM_VALIDATION.FILE_MAXNUM': 'Número máximo de ficheros',
    'FORM_VALIDATION.HOUR_FORMAT': 'Formato no válido',

    'MESSAGES.FORM_VALIDATION_ERROR': 'El formulario contiene campos con valores no válidos',
    'MESSAGES.FORM_NOTHING_TO_UPDATE_INFO': '¡No existen valores para actualizar!',
    'MESSAGES.FORM_CHANGES_WILL_BE_LOST': '¿Está seguro de que quiere continuar? Perderá los cambios realizados',
    'MESSAGES.ERROR_LOGIN': 'Error de inicio de sesión. Compruebe nombre de usuario y/o contraseña.',
    'MESSAGES.ERROR_SESSION': 'La sesión ha caducado',
    'MESSAGES.ERROR_INSERT': 'Error al insertar datos.',
    'MESSAGES.ERROR_QUERY': 'Error al consultar datos del servidor.',
    'MESSAGES.ERROR_UPDATE': 'Error al actualizar datos.',
    'MESSAGES.ERROR_DELETE': 'Error al borrar datos.',
    'MESSAGES.ERROR_ATTRIBUTE_REQUIRED': 'Atributo requerido no proporcionado.',
    'MESSAGES.ERROR_FILE_LOAD': 'Error al cargar el archivo.',
    'MESSAGES.CONFIRM_ACTION': '¿Está seguro de que quiere continuar?',
    'MESSAGES.CONFIRM_LOGOUT': '¿Está seguro de que quiere salir?',
    'MESSAGES.CONFIRM_DELETE': '¿Está seguro de que quiere borrar los items seleccionados?',
    'MESSAGES.CONFIRM_CANCEL': '¿Está seguro de que quiere cancelar sin guardar los cambios?',
    'MESSAGES.SAVING': 'Guardando, espere...',
    'MESSAGES.SAVED': 'Guardado',
    'MESSAGES.DELETED': 'Borrado',
    'MESSAGES.INSERTED': 'Insertado',
    'MESSAGES.UPDATED': 'Actualizado',
    'MESSAGES.NO_RESULTS': 'No se obtuvieron resultados.',
    'MESSAGES.ERROR_MISSING_LANG': 'No se ha encontrado el fichero de configuración del idioma seleccionado',
    'MESSAGES.CONFIRM_DISCARD_FILTER_BY_COLUMN': '¿Está seguro de que quiere descartar todos los filtros de columna activos?',
    'MESSAGES.ERROR_EXPORT_TABLE_DATA': 'Error al exportar los datos de la tabla.',
    'MESSAGES.SUCCESS_EXPORT_TABLE_DATA': 'Se han exportado los datos de la tabla correctamente.',
    'TABLE.FILTER_BY_COLUMN.CHECK_ALL': 'Seleccionar todos',
    'TABLE.FILTER_BY_COLUMN.EMPTY_VALUE': '(valor vacío)',
    'TABLE.FILTER_BY_COLUMN.HINT_STAR': 'Use * para buscar por cualquier valor',
    'TABLE.FILTER_BY_COLUMN.BY_VALUE': 'Filtro por valor',
    'TABLE.FILTER_BY_COLUMN.CUSTOM_FILTER': 'Filtro personalizado',
    'TABLE.FILTER_BY_COLUMN.FROM': 'Desde',
    'TABLE.FILTER_BY_COLUMN.TO': 'Hasta',
    'TABLE.FILTER_BY_COLUMN.LIST_EMPTY': 'No hay valores',
    'TABLE.FILTER_BY_COLUMN.LIST_EMPTY_FILTER': 'Introduzca un filtro',
    'TABLE.FILTER': 'Filtrar',
    'TABLE.FILTER.CASE_SENSITIVE': 'Coincidir mayúsculas y minúsculas',
    'TABLE.EMPTY': 'No se han obtenido resultados',
    'TABLE.EMPTY_USING_FILTER': ' usando el filtro "{0}"',
    'TABLE.INFO': '_START_ - _END_ de _TOTAL_',
    'TABLE.INFO_EMPTY': '0 - 0 de 0',
    'TABLE.INFO_FILTERED': '(filtrados de un total de _MAX_ registros)',
    'TABLE.INFO_POST_FIX': ' ',
    'TABLE.LENGTH_MENU': 'Registros por página: _MENU_',
    'TABLE.LOADING_RECORDS': 'Cargando...',
    'TABLE.PROCESSING': 'Procesando...',
    'TABLE.SEARCH': ' ',
    'TABLE.ZERO_RECORDS': 'No se encontraron coincidencias',
    'TABLE.PAGINATE.FIRST': 'Primero',
    'TABLE.PAGINATE.LAST': 'Último',
    'TABLE.PAGINATE.NEXT': 'Siguiente',
    'TABLE.PAGINATE.PREVIOUS': 'Anterior',
    'TABLE.PAGINATE.RANGE_LABEL': 'de',
    'TABLE.PAGINATE.ITEMSPERPAGELABEL': 'Registros por página',
    'TABLE.ARIA.SORT_ASCENDING': ': activar para ordenar la columna de forma ascendente',
    'TABLE.ARIA.SORT_DESCENDING': ': activar para ordenar la columna de forma descendente',
    'TABLE.BUTTONS.COLVIS': 'Mostrar / ocultar columnas',
    'TABLE.BUTTONS.COPY_TITLE': 'Copiado al portapapeles',
    'TABLE.BUTTONS.COPY_SUCCESS._': '%d registros copiados',
    'TABLE.BUTTONS.COPY_SUCCESS.1': '1 registro copiado',
    'TABLE.BUTTONS.COPY_TO_CLIPBOARD': 'Copiar al portapapeles',
    'TABLE.BUTTONS.PRINT': 'Imprimir',
    'TABLE.BUTTONS.EXPORT': 'Exportar',
    'TABLE.BUTTONS.EXCEL': 'Excel',
    'TABLE.BUTTONS.HTML': 'HTML',
    'TABLE.BUTTONS.PDF': 'PDF',
    'TABLE.BUTTONS.GROUP_ROWS': 'Agrupar registros',
    'TABLE.BUTTONS.RESIZE_COLUMNS': 'Cambiar tamaño de columnas',
    'TABLE.BUTTONS.FILTER': 'Filtrar',
    'TABLE.BUTTONS.FILTER_SAVE': 'Guardar filtro',
    'TABLE.BUTTONS.FILTER_LOAD': 'Aplicar filtro',
    'TABLE.BUTTONS.FILTER_CLEAR': 'Limpiar filtro',
    'TABLE.BUTTONS.REFRESH': 'Refrescar',
    'TABLE.BUTTONS.DELETE': 'Eliminar',
    'TABLE.BUTTONS.ADD': 'Nuevo',
    'TABLE.BUTTONS.SELECT': 'Seleccionar...',
    'TABLE.BUTTONS.FILTER_BY_COLUMN': 'Filtrado por columnas',
    'TABLE.BUTTONS.SAVE_FILTER': 'Guardar filtro',
    'TABLE.BUTTONS.CONFIGURATION': 'Configuración',
    'TABLE.BUTTONS.SAVE_CONFIGURATION': 'Guardar configuración',
    'TABLE.BUTTONS.APPLY_CONFIGURATION': 'Aplicar configuración',
    'TABLE.BUTTONS.APPLY': 'Aplicar',
    'TABLE.SELECT.ROWS._': '%d registros seleccionados',
    'TABLE.SELECT.ROWS.0': ' ',
    'TABLE.SELECT.ROWS.1': '1 registro seleccionado',
    'TABLE.SHOW_ALL': 'Todo',
    'TABLE.SELECT_DATE': 'Seleccionar fecha',
    'TABLE.ROW_VALIDATION_ERROR': 'La fila contiene campos con valores no válidos',
    'TABLE.DIALOG.SAVE_FILTER': 'Seleccione un nombre para el filtro.',
    'TABLE.DIALOG.FILTER_NAME': 'Nombre',
    'TABLE.DIALOG.FILTER_DESCRIPTION': 'Descripción',
    'TABLE.DIALOG.LOAD_FILTER': 'Seleccione un filtro para aplicar a la tabla',
    'TABLE.DIALOG.CONFIRM_CLEAR_FILTER': 'Esta acción limpiará todos los filtros aplicados a la tabla. ¿Desea continuar?',
    'TABLE.DIALOG.CONFIRM_REMOVE_FILTER': '¿Está seguro de que quiere eliminar el filtro seleccionado?',
    'TABLE.DIALOG.EMPTY_FILTER_LIST': 'No hay filtros almacenados',
    'TABLE.DIALOG.FILTER_NAME_ALREADY_EXISTS': 'Ya existe un filtro con ese nombre',
    'TABLE.DIALOG.SAVE_CONFIGURATION': 'Introduzca un nombre y una descripción para la configuración',
    'TABLE.DIALOG.CONFIGURATION_NAME': 'Nombre',
    'TABLE.DIALOG.CONFIGURATION_DESCRIPTION': 'Descripción',
    'TABLE.DIALOG.APPLY_CONFIGURATION': 'Seleccione una configuración para aplicar a la tabla',
    'TABLE.DIALOG.APPLY_CONFIGURATION_DEFAULT': 'Configuración por defecto',
    'TABLE.DIALOG.APPLY_CONFIGURATION_DEFAULT_DESCRIPTION': 'Restaura la configuración inicial de la tabla',
    'TABLE.DIALOG.CONFIGURATION_PROPERTIES': 'Seleccione qué propiedades desea almacenar',
    'TABLE.DIALOG.PROPERTIES.SORT': 'Ordenación de columnas',
    'TABLE.DIALOG.PROPERTIES.COLUMNS_DISPLAY': 'Visualización de columnas',
    'TABLE.DIALOG.PROPERTIES.QUICK_FILTER': 'Estado del quick-filter',
    'TABLE.DIALOG.PROPERTIES.COLUMNS_FILTER': 'Filtrado por columnas',
    'TABLE.DIALOG.PROPERTIES.PAGE': 'Estado de paginación',
    'TABLE.DIALOG.CONFIRM_REMOVE_CONFIGURATION': '¿Está seguro de que quiere eliminar la configuración seleccionado?',
    'TABLE.DIALOG.EXPORT.DESCRIPTION': 'Seleccione el formato al que desea exportar la información de la tabla.',
    'LAYOUT_MANANGER.MAIN_TAB_LABEL': 'Inicio',
    'LAYOUT_MANANGER.DIALOG_TITLE': 'Detalle',
    'LAYOUT_MANANGER.INSERTION_MODE_TITLE': 'Nuevo',
    'APP_LAYOUT.USER_PROFILE': 'Mi perfil',
    'CARD_MENU_LAYOUT.BUTTON_TEXT': 'Acceder',
    'GRID.ITEMS_PER_PAGE': 'Elementos por página',
    'GRID.SORT_BY': 'Ordenado por ',
    'GRID.BUTTON_NEXT': 'Ver más',
    'GRID.TEXT_SHOWN_ITEMS': '{0} / {1}'
  }

};
