import e from "express";

/**
 *
 * @param {*} app : express app
 *
 */
const configViewEngine = (app) => {
  app.use(e.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
