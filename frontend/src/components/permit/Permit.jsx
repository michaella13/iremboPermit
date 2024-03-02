import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import FeedIcon from '@mui/icons-material/Feed';
import PhoneInput from '../phoneNumber/PhoneInput';

export default function Permit() {
  
  const validationSchema = Yup.object().shape({
    citizenship: Yup.string().required('Citizenship is required'),
    phoneNumber: Yup.string(),
    email: Yup.string().email('Invalid email'),
    province: Yup.string().required('Province is required'),
    businessType: Yup.string().required('Business type is required'),
    companyName: Yup.string().required('Company name is required'),
    tinNumber: Yup.string().required('TIN number is required'),
    registrationDate: Yup.date().required('Registration date is required'),
    productCategory: Yup.string().required('Product category is required'),
    weight: Yup.number(),
    unitOfMeasurement: Yup.string().required('Unit of measurement is required'),
    quantityOfProduct: Yup.string().required('Quantity of product is required'),
    descriptionOfProduct: Yup.string().required('Description of products is required'),
    purposeOfImportation: Yup.string().required('Purpose of importation is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      phoneNumber: '',
      citizenship: '',
      province: '',
      businessType: '',
      companyName: '',
      tinNumber: '',
      registrationDate: '',
      productCategory: '',
      weight: '',
      unitOfMeasurement: '',
      quantityOfProduct: '',
      descriptionOfProduct: '',
      purposeOfImportation: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Heyyyy here are the values "+values.phoneNumber)
      axios.post('http://192.168.1.80:8000/', values)
        .then(response => {
          // localStorage.setItem("token", response.data.token);
          console.log("Response "+response)
        })
        .catch(err => {
          console.log(err);
        });
    }
  });

  return (
    <div>
    <form className='flex flex-col justify-center items-center my-5' onSubmit={formik.handleSubmit}>
      <div className='maindiv w-3/4 border border-2 border-blue-500 border rounded-md my-5'>
        <div className='bg-blue-100 px-7 border border-b-2 border-blue-500 h-10 flex items-center'>
          <span className='flex'>
            <FeedIcon style={{ color: 'blue', size: 24 }} />
            <p className='text-blue-600 font-semibold mx-1'>Business Owner Details</p>
          </span>
        </div>
        <div className='px-8'>
          <div className='my-2'>
            <h2 className='font-bold'>Business owner details</h2>

               <div className='w-1/3'>
                <label htmlFor="citizenship" className="block text-sm font-medium text-black mb-1">
                  Applicant citizenship <span className="text-red-500">*</span>
                </label>
                <select
                  id="citizenship"
                  name="citizenship"
                  className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  value={formik.values.citizenship}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Citizenship</option>
                  <option value="Rwandan">Rwandan</option>
                  <option value="Congolese">Congolese</option>
                </select>
                {formik.touched.citizenship && formik.errors.citizenship && (
                  <div className='text-sm text-error'>{formik.errors.citizenship}</div>
                )}
              </div>
              
              <div className='phoneAndEmail flex'>
                <div className='w-1/3'>
                  <PhoneInput
                    label="Phone number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="780921445"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                </div>

                <div className='w-1/3'>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-11/12 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='text-sm text-error'>{formik.errors.email}</div>
                  )}
                </div>
              </div>

              <h2 className='font-bold'>Business Owner Address</h2> 

              <div className='w-1/3 my-2'>
                <label htmlFor="province" className="block text-sm font-medium text-black mb-1">
                  Province <span className="text-red-500">*</span>
                </label>
                <select
                  id="province"
                  name="province"
                  className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  value={formik.values.province}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Province</option>
                  <option value="Northern">Northern</option>
                  <option value="Southern">Southern</option>
                </select>
                {formik.touched.province && formik.errors.province && (
                  <div className='text-sm text-error'>{formik.errors.province}</div>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* Business details */}

      <div className='maindiv w-3/4 border border-2 border-blue-500 border rounded-md'>
        <div className='bg-blue-100 px-7 border border-b-2 border-blue-500 h-10 flex items-center'>
          <span className='flex'>
            <FeedIcon style={{ color: 'blue', size: 24 }} />
            <p className='text-blue-600 font-semibold mx-1'>Business Details</p>
          </span>
        </div>
        <div className='px-8'>
          <div className='my-2'>
            <h2 className='font-bold'>Business Details</h2>

            <div className='flex'>
              <div className='w-1/3'>
                <label htmlFor="businessType" className="block text-sm font-medium text-black mb-1">
                  Business type <span className="text-red-500">*</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  value={formik.values.businessType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select business type</option>
                  <option value="Sole proprietorship">Sole proprietorship</option>
                  <option value="Partnership">Partnership</option>
                </select>
                {formik.touched.businessType && formik.errors.businessType && (
                  <div className='text-sm text-error'>{formik.errors.businessType}</div>
                )}
              </div>

              <div className='w-1/3'>
                <label htmlFor="companyName" className="block text-sm font-medium text-black mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className="w-11/12 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  placeholder="Company Name"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className='text-sm text-error'>{formik.errors.companyName}</div>
                )}
              </div>
            </div>

            <div className='flex'>
              <div className='w-1/3'>
                <label htmlFor="tinNumber" className="block text-sm font-medium text-black mb-1">
                  TIN Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="tinNumber"
                  name="tinNumber"
                  placeholder='TIN Number'
                  className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  value={formik.values.tinNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                
                {formik.touched.tinNumber && formik.errors.tinNumber && (
                  <div className='text-sm text-error'>{formik.errors.tinNumber}</div>
                )}
              </div>

              <div className='w-1/3'>
                <label htmlFor="registrationDate" className="block text-sm font-medium text-black mb-1">
                  Registration Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="registrationDate"
                  name="registrationDate"
                  type="date"
                  className="w-11/12 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  placeholder="Registration Date"
                  value={formik.values.registrationDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.registrationDate && formik.errors.registrationDate && (
                  <div className='text-sm text-error'>{formik.errors.registrationDate}</div>
                )}
              </div>
            </div>

            <h2 className='font-bold'>Business Address</h2> 

            <div className='w-1/3 my-2'>
              <label htmlFor="province" className="block text-sm font-medium text-black mb-1">
                Province <span className="text-red-500">*</span>
              </label>
              <select
                id="province"
                name="province"
                className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                value={formik.values.province}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Province</option>
                <option value="Northern">Northern</option>
                <option value="Southern">Southern</option>
              </select>
              {formik.touched.province && formik.errors.province && (
                <div className='text-sm text-error'>{formik.errors.province}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product information */}

      <div className='maindiv w-3/4 border border-2 border-blue-500 border rounded-md my-5'>
        <div className='bg-blue-100 px-7 border border-b-2 border-blue-500 h-10 flex items-center'>
          <span className='flex'>
            <FeedIcon style={{ color: 'blue', size: 24 }} />
            <p className='text-blue-600 font-semibold mx-1'>Product Information</p>
          </span>
        </div>
        <div className='px-8'>
          <div className='my-2'>
            <h2 className='font-bold'>Importation details </h2>

            <div className='w-1/3'>
              <label htmlFor="purposeOfImportation" className="block text-sm font-medium text-black my-1">
                Purpose of Importation <span className="text-red-500">*</span>
              </label>
              <select
                id="purposeOfImportation"
                name="purposeOfImportation"
                className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                value={formik.values.purposeOfImportation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Enter the purpose of Importation</option>
                <option value="Sale">Sale</option>
                <option value="Usage">Usage</option>
              </select>
              {formik.touched.purposeOfImportation && formik.errors.purposeOfImportation && (
                <div className='text-sm text-error'>{formik.errors.purposeOfImportation}</div>
              )}
            </div>

            <h2 className='font-bold'>Product Details </h2>

            <div className='w-1/3'>
              <label htmlFor="productCategory" className="block text-sm font-medium text-black my-1">
                Product Category <span className="text-red-500">*</span>
              </label>
              <select
                id="productCategory"
                name="productCategory"
                className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                value={formik.values.productCategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Product Category</option>
                <option value="Retail">Retail</option>
                <option value="Full">Full</option>
              </select>
              {formik.touched.productCategory && formik.errors.productCategory && (
                <div className='text-sm text-error'>{formik.errors.productCategory}</div>
              )}
            </div>

            <div className='flex'>
              <div className='w-1/3'>
                <label htmlFor="weight" className="block text-sm font-medium text-black mb-1">
                  Weight
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  className="w-11/12 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  placeholder="Weight(Kg)"
                  value={formik.values.weight}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.weight && formik.errors.weight && (
                  <div className='text-sm text-error'>{formik.errors.weight}</div>
                )}
              </div>

              <div className='w-1/3'>
                <label htmlFor="unitOfMeasurement" className="block text-sm font-medium text-black mb-1">
                  Unit of Measurement <span className="text-red-500">*</span>
                </label>
                <select
                  id="unitOfMeasurement"
                  name="unitOfMeasurement"
                  className="w-11/12 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  value={formik.values.unitOfMeasurement}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select unit of measurement</option>
                  <option value="Kilogram">Kilogram</option>
                  <option value="Ampere">Ampere</option>
                </select>
                {formik.touched.unitOfMeasurement && formik.errors.unitOfMeasurement && (
                  <div className='text-sm text-error'>{formik.errors.unitOfMeasurement}</div>
                )}
              </div>
            </div>

            <div className='flex'>
              <div className='w-1/3'>
                <label htmlFor="quantityOfProduct" className="block text-sm font-medium text-black mb-1">
                  Quantity of Product <span className="text-red-500">*</span>
                </label>
                <input
                  id="quantityOfProduct"
                  name="quantityOfProduct"
                  type="text"
                  className="w-11/12 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                  placeholder="Enter quantity of product"
                  value={formik.values.quantityOfProduct}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.quantityOfProduct && formik.errors.quantityOfProduct && (
                  <div className='text-sm text-error'>{formik.errors.quantityOfProduct}</div>
                )}
              </div>
            </div>

            <div className='w-4/6 my-2'>
              <label htmlFor="descriptionOfProduct" className="block text-sm font-medium text-black mb-1">
                Description of Products <span className="text-red-500">*</span>
              </label>
              <textarea
                id="descriptionOfProduct"
                name="descriptionOfProduct"
                placeholder='Enter product description'
                className="w-full h-24 border border-gray-300 text-gray-500 rounded-md py-2 px-3 focus:outline-none focus:border-green-900 placeholder-gray-400 bg-sub outline-none my-2.5"
                value={formik.values.descriptionOfProduct}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.descriptionOfProduct && formik.errors.descriptionOfProduct && (
                <div className='text-sm text-error'>{formik.errors.descriptionOfProduct}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="h-12 sm:w-4/6 w-1/3 rounded-md text-white font-bold bg-blue-500 mx-14 mt-2 md:mx-14 lg:mx-24">Submit</button>
    </form>
    </div>
  );
}
