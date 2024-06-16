export const maxLength = (length: number) => ({
  value: length,
  message: `Must be at most ${length} characters`,
});

export const emailPattern = {
  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  message: "Invalid email address",
};

export const requiredField = {
  value: true,
  message: "This field is required",
};
