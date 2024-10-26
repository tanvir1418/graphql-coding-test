import jwt from "jsonwebtoken";
import throwCustomError, { ErrorTypes } from "../helpers/errorHandlerHelper.js";

const getUser = async (token) => {
  try {
    if (token) {
      const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return user;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const context = async ({ req, res }) => {
  if (req.body.operationName === "IntrospectionQuery") {
    // console.log('blocking introspection query..');
    return {};
  }
  if (req.body.operationName === "CreateToken") {
    return {};
  }
  const token = req.headers.authorization || "";
  if (!token) {
    throwCustomError("User is not Authenticated", ErrorTypes.UNAUTHENTICATED);
  }
  const user = await getUser(token);
  if (!user) {
    throwCustomError("User is not Authenticated", ErrorTypes.UNAUTHENTICATED);
  }
  return { user };
};

export default context;
