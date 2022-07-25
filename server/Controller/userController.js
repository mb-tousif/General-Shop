import User from "../model/userSchema.js";

// signup api
export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });

    if (exist) {
      return res.status(401).json({
        message: "Username already exists",
      });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({
      message: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// login api
export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("Invalid login"); // 401 means invalid request
    }
  } catch (err) {
    res.status(500).json("Error ", err.message);
  }
};
