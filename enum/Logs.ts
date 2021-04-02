export enum Logs {
    ENDPOINT_RECEIVED_REQUEST = 'Endpoint received a request',
    INVALID_SESSION_ID = 'Error! Session Id not valid',
    INVALID_ROOM_ID = 'Error! Room Id not valid',
    INVALID_REQUEST_CONTENT = 'Error! Request content not valid',
    INVALID_BOT_USERNAME_SETTING = 'The Bot User does not exist.',
    INVALID_BOTPRESS_SERVER_URL_SETTING = 'Error! botpress server url not valid',
    INVALID_VISITOR_TOKEN = 'Error: Visitor Token not valid',
    INVALID_DEPARTMENT_NAME = 'Error: Department Name is not valid',
    INVALID_ACTION_USER_ALREADY_IN_DEPARTMENT = 'Error! Invalid request. User is already present in the specified department',
    ENDPOINT_REQUEST_PROCESSING_ERROR = 'Error occurred while processing the request. Details:- ',
    INVALID_ENDPOINT_ACTION = 'Error!! Invalid Action type',
    EMPTY_BOT_USERNAME_SETTING = 'The Bot Username setting is not defined.',
    BOTPRESS_REST_API_COMMUNICATION_ERROR = 'Error occurred while interacting with botpress Rest API. Details: ',
    INVALID_RESPONSE_FROM_BOTPRESS = 'Error!! Invalid Response From BOTPRESS',
    INVALID_RESPONSE_FROM_BOTPRESS_CONTENT_UNDEFINED = 'Error Parsing BOTPRESS\'s Response. Content is undefined',
    CLOSE_CHAT_REQUEST_FAILED_ERROR = 'Error: Internal Server Error. Could not close the chat',
    HANDOVER_REQUEST_FAILED_ERROR = 'Error occurred while processing handover. Details',
    INVALID_DEPARTMENT_NAME_IN_BOTH_SETTING_AND_REQUEST = 'Error: Department Name cannot be empty. Please provide a department name either in App Setting or in the handover Request',
}
