import React, {useState, useCallback} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import axios from 'axios';
import {useDropzone} from 'react-dropzone'
import './Form.css'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  first_name: yup
    .string('Enter your First name')
    .required('First name is required'),
  last_name: yup
    .string('Enter your Last name')
    .required('Last name is required'),
  photo: yup
    .string('Upload your photo')
    .required('Photo is required'),
});

function Form() {
  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name:'',
      email:'',
      photo: null
    },
    validationSchema: validationSchema,
    onSubmit: async (values, {resetForm}) => {
      console.log(values);
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/detail/store', values, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        handleUploadSuccess();
        resetForm();
      } catch(error) {
        console.log(error);
        handleFailMessage();
      }
    },
  });

  const handleFailMessage = () => {
    setFailMessage('Failed to upload');
    setTimeout(() => {
      setFailMessage('');
    }, 5000);
  }

  const handleUploadSuccess = () => {
    setSuccessMessage('Uploaded successfully');
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0])
    formik.setFieldValue('photo', acceptedFiles[0]);
  }, [formik])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
    </React.Fragment>
  ); 
  return (
    <div>
    <Header/>
    <section className='r-wrapper'>
      <div className='innerWidth r-container'>
        <div className="r-head flexColCenter">
          <span className='primaryText paddings'>Submit Details</span>
        </div>
        <div className='success flexColCenter'>{successMessage && <p>{successMessage}</p>}</div>
        <div className='fail flexColCenter'>{failMessage && <p>{failMessage}</p>}</div>
        <div className='flexColCenter'>
       
          <Box width="50%">
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                      fullWidth
                      id="first_name"
                      name="first_name"
                      label="First name"
                      margin="dense"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                      helperText={formik.touched.first_name && formik.errors.first_name}
                    />
                    <TextField
                      fullWidth
                      id="last_name"
                      name="last_name"
                      label="Last name"
                      type="text"
                      margin="dense"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                      helperText={formik.touched.last_name && formik.errors.last_name}
                    />
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      margin="dense"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <div  className='paddings upload' {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                          isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Upload a photo</p>
                        }
                      </div>
                  <Button type="submit" color="success" fullWidth variant='contained' margin="dense">
                    Submit
                  </Button>
                </form>
            </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Form