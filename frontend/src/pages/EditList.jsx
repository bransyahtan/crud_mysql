import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

export const EditList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, {
        name,
        phone,
        email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
  };
  return (
    <>
      <div className="bg-slate-900 h-screen flex justify-center items-center">
        <div className="w-1/3 h-auto bg-white rounded-2xl p-8 mt-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-slate-900">
            UPDATE
          </h1>
          <form onSubmit={updateUser}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
            >
              UPDATE
            </button>
          </form>

          <Link to="/">
            <button
              type="submit"
              className="mt-3 w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
            >
              BACK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
