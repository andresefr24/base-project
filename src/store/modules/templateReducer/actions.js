export const Types = {
  TEMPLATE_ACTION_TRIGGER: "@template_reducer/TEMPLATE_ACTION_TRIGGER",
  TEMPLATE_ACTION_SUCCESS: "@template_reducer/TEMPLATE_ACTION_SUCCESS",
  TEMPLATE_ACTION_FAILURE: "@template_reducer/TEMPLATE_ACTION_FAILURE",
};

export const templateTrigger = () => ({
  type: Types.TEMPLATE_ACTION_TRIGGER,
});

export const templateActionSuccess = (payload) => ({
  type: Types.TEMPLATE_ACTION_SUCCESS,
  payload,
});

export const templateActionFailure = () => ({
  type: Types.TEMPLATE_ACTION_FAILURE,
});
