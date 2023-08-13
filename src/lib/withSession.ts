import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import type { IronSessionOptions } from 'iron-session'
import {
  NextApiHandler,
} from "next";

const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: process.env.SESSION_COOKIE_NAME || 'cookie-app',
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}