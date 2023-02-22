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
      if (!fields[prop]) error.push(prop);
    }
    resolve(error);
  });
};
