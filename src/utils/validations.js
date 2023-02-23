export const registerFields = {
  name: "",
  phone: "",
  passOut: "",
  class: "7",
  // gender: "",
};

export const validate = (fields) => {
  return new Promise((resolve, reject) => {
    let error = [];

    for (let prop in registerFields) {
      if (prop === "phone" && fields[prop]?.length < 10) {
        error.push(prop);
        continue;
      }

      if (!fields[prop]) error.push(prop);

      if (fields[prop]?.length > 2) {
        error = error.filter((e) => e !== prop);
      }
    }
    resolve(error);
  });
};
