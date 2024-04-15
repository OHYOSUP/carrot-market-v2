import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

const db = new PrismaClient();

async function test() {
  const token = await db.SMSToken.findUnique({
    where:{
        id: 2
    },
    include: {
        user: true
    }
  });
  console.log(token)
}

test();

export default db;
