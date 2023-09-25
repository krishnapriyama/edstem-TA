import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SurveyScreen = () => {
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      name: "",
      education: "",
      skills: {
        node: false,
        react: false,
        bun: false,
        angular: false,
      },
      gender: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      education: Yup.string().required("Education is required"),
      gender: Yup.string().required("Gender is required"),
      phoneNumber: Yup.string()
      .required("Phone number is required")
      .test(
        'is-ten-characters',
        'Phone number must be exactly 10 characters',
        (value) => value && value.length === 10
      ),
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/surveydetails",
          values
        );
        if (response.data.created === false) {
          generateError("Invalid error");
        } else if (response.data.message) {
          console.log(response, "----------");
          navigate("/table");
        }
      } catch (error) {
        generateError("An error occurred"); 
      }
    },
  });

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center min-h-screen">
      <div className="flex flex-col justify-end mb-10">
        <h1 className="font-extrabold gap-5 text-xl">SURVEY SUBMIT</h1>
      </div>
      <div className="block max-w-sm md:max-w-md lg:max-w-lg rounded-lg border border-black bg-white p-6">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <label className="font-bold w-24">Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="mb-2 md:mb-0 border border-black"
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 mb-4">{formik.errors.name}</div>
          ) : null}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <label className="font-bold w-24">Education</label>
            <select
              name="education"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education}
              className="outline-none"
            >
              <option value="">Select from the option</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
          </div>
          {formik.touched.education && formik.errors.education ? (
            <div className="text-red-500 mb-4">{formik.errors.education}</div>
          ) : null}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <label className="font-bold w-24">Skills</label>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="skills.node"
                  id="node"
                  checked={formik.values.skills.node}
                  onChange={formik.handleChange}
                />
                <label htmlFor="node">Node JS</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="skills.react"
                  id="react"
                  checked={formik.values.skills.react}
                  onChange={formik.handleChange}
                />
                <label htmlFor="react">React JS</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="skills.bun"
                  id="bun"
                  checked={formik.values.skills.bun}
                  onChange={formik.handleChange}
                />
                <label htmlFor="bun">Bun JS</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="skills.angular"
                  id="angular"
                  checked={formik.values.skills.angular}
                  onChange={formik.handleChange}
                />
                <label htmlFor="angular">Angular JS</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <label className="font-bold w-24">Gender</label>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={formik.values.gender === "other"}
                  onChange={formik.handleChange}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="text-red-500 mb-4">{formik.errors.gender}</div>
          ) : null}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <label className="font-bold w-24">Phone number</label>
            <input
              type="number"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className="mb-2 md:mb-0 border border-black"
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 mb-4">{formik.errors.phoneNumber}</div>
          ) : null}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <label className="font-bold w-24">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mb-2 md:mb-0 border border-black"
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 mb-4">{formik.errors.email}</div>
          ) : null}
          <div className="w-full text-center md:text-end mt-6">
            <button
              type="submit"
              className="border px-4 py-2 rounded-xl bg-blue-500 uppercase font-bold text-white text-sm"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <button
        className="border px-3 py-2 rounded-xl bg-blue-600 text-white uppercase text-sm font-bold"
        onClick={() => {
          navigate("/table");
        }}
      >
        Survey data
      </button>
      <ToastContainer />
    </div>
  );
};

export default SurveyScreen;
