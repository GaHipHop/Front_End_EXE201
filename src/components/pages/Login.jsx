import React from "react";
import { Button, Checkbox } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    isRemeber: "",
  });
  const login = useAuthStore((state) => state.login);

  const hanndleLogin = async () => {
    console.log(formData);
    setLoading(true);
    setError("");
    try {
      const response = await postLogin(formData);
      console.log(response);

      const { token, user } = response.data.data; // Chú ý thay đổi đường dẫn để truy cập `data`

      console.log(token, user.username);

      const userInfo = { ...user, token };
      login(token, userInfo);
      toast.success("Login Successful");
      setTimeout(() => {
        user.username === "admin"
          ? router.push("/admin/dashboard")
          : router.push("/");
      }, 1000);
    } catch (error) {
      // Handle login error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const err = error.response.data.message;
        console.log(error);

        toast.error(err);
        setError(error.response.data.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
    setLoading(false);
  };

  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-screen max-md:px-5">
      <img
        loading="lazy"
        src="/src/assets/image/loginBG.png"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }} // Set z-index to push the image to the background
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-2xl bg-pink-100 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <img
            src="/src/assets/image/logo.png"
            alt="Ga Hiphop Logo"
            className="w-40 h-40 mb-10"
          />
          <h1 className="text-5xl font-poiret-one font-medium">Ga Hiphop</h1>
        </div>
        <div className="h-1 w-full md:h-full md:w-1 bg-black my-4 md:my-0"></div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-plus-jakarta font-semibold mb-4">
            Login Here
          </h2>
          <div className="relative w-full max-w-sm mb-5">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                handleDataChange("username", e.target.value);
              }}
              className="pl-10 p-2 border rounded-full w-full shadow"
            />
          </div>
          <div className="relative w-full max-w-sm mb-5">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                handleDataChange("password", e.target.value);
              }}
              className="pl-10 p-2 border rounded-full w-full shadow"
            />
          </div>
          <div className="relative w-full max-w-sm mb-4 ml-8 flex items-center">
            <Checkbox id="rememberMe" defaultSelected className="mr-1 " />
            onChange=
            {(e) => {
              handleDataChange("isRemember", e.target.checked);
            }}
            <label htmlFor="rememberMe" className="text-gray-700 mb-1">
              Remember Me
            </label>
          </div>
          <Button
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-8 rounded-full shadow transition duration-300 ease-in-out transform hover:scale-105"
            onClick={hanndleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
