/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export const additionalFormStyles = {
  control: (base: any) => ({
    ...base,
    borderRadius: "4px",
    border: "none",
    boxShadow: "none",
    boxSizing: "border - box",
    wordWrap: "break-word",
    backgroundColor: "#0f172a",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#475569",
    padding: "8px",
    width: "384px",

  }),
  placeholder: (base: any) => ({
        ...base,
        color: "white",
  }),

  singleValue: (base: any) => ({
        ...base,
        color: "white",
  }),

  option: (styles: any, { isSelected, isFocused }: any) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#475569" : "white",
      cursor: "pointer",
      border: "none",
      color: isFocused ? "white" : "#475569",
      fontSize: "0.8rem",
      ":active": {
        ...styles[":active"],
        backgroundColor: "#4438ca8a"
          ? isSelected
            ? "#4338ca"
            : "#4338ca"
          : undefined,
      },
    };
  },
};
