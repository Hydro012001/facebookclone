const bcrypt = require("bcrypt");

const saltRounds = 10;

export const HashPassword = async (password: string): Promise<string> => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
};
