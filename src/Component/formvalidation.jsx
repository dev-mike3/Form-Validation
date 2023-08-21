import {useState} from 'react'
import "./formvalidation.css"

const initialState = {
  Username: "",
  Othername: "",
  Mothername: "",
  Date: "",
  gender: "",
  state : "",
  Fathername: "",
  Password: "",
  confirmPassword: ""

}

const Gender = [
  {id: 1, name: 'Male'},
  {id: 2, name: 'Female'},
  {id: 3, name: 'custom'}
]

const State = [
  {id: 1, name: 'Abia'},
  {id: 2, name: 'Adamawa'},
  {id: 3, name: 'Akwa Ibom'},
  {id: 4, name: 'Anambara'},
  {id: 5, name: 'Bauchi'},
  {id: 6, name: 'Bayelsa'},
  {id: 7, name: 'Benue'},
  {id: 8, name: 'Borno'},
  {id: 9, name: 'Cross River'},
  {id: 10, name: 'Delta'},
  {id: 11, name: 'Ebonyi'},
  {id: 12, name: 'Edo'},
  {id: 13, name: 'Ekiti'},
  {id: 14, name: 'Enugu'},
  {id: 15, name: 'Gombe'},
  {id: 16, name: 'Imo'},
  {id: 17, name: 'Jigawa'},
  {id: 18, name: 'Kaduna'},
  {id: 19, name: 'Kano'},
  {id: 20, name: 'Katsina'},
  {id: 21, name: 'Kebbi'},
  {id: 22, name: 'Kogi'},
  {id: 23, name: 'Kwara'},
  {id: 24, name: 'Lagos'},
  {id: 25, name: 'Nassawara'},
  {id: 26, name: 'Niger'},
  {id: 27, name: 'Ogun'},
  {id: 28, name: 'Ondo'},
  {id: 29, name: 'Osun'},
  {id: 30, name: 'Oyo'},
  {id: 31, name: 'Plateu'},
  {id: 32, name: 'Rivers'},
  {id: 33, name: 'Sokoto'},
  {id: 34, name: 'Taraba'},
  {id: 35, name: 'Yobe'},
  {id: 36, name: 'Zamfara'}
  
]


const FormValidation = () => {


  const [FormValue, setFormValue] = useState(initialState)
  //De-structuring in React
  const {Username, Othername, Mothername, Date, gender, state, Fathername, Password, confirmPassword} = FormValue
  //Error handling
  const [Errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormValue({ ...FormValue, [e.target.name]: e.target.value})
  }
  const Validate = () => {
    let newErrors = {}

    //Validating for input fields
    if (!Username) {
      newErrors.Username = "Username is required"
    }
    if (!Othername) {
      newErrors.Othername = "Othername is required"
    }
    if (!Date) {
      newErrors.Date = "Date is required"
    }
    if (!gender) {
      newErrors.gender = "Gender is required"
    }
    if (!state) {
      newErrors.state = "State is required"
    }
    if (!Mothername) {
      newErrors.Mothername = "Mothername is required"
    }
    if (!Fathername) {
      newErrors.Fathername = "Fathername is required"
    }
    if (!Password) {
      newErrors.Password = "Password is required"
    } else if (Password.length < 6) {
      newErrors.Password = "Password must be atleast 6 characters long"
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required"
    } else if (confirmPassword !== Password) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)

    //Return True if there are no errors
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Validate()) {
      //Perform form submission
      console.log('Form submitted:', FormValue)
      setFormValue(initialState)
    }

  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Form Validation</h2>


      <div className='form-group'>
        <label>Username:</label>
        <input
          type='text'
          name='Username'
          placeholder='Username'
          value={Username}
          onChange={handleChange}
        />
        {Errors.Username && <span className='error'>{Errors.Username}</span>}
      </div>
      <div className="form-group">
        <label>Other names</label>
        <input
          type='text'
          name='Othername'
          placeholder='Othernames'
          value={Othername}
          onChange={handleChange}
        />
        {Errors.Othername && <span className='error'>{Errors.Othername}</span>}
      </div>
      <div className="form-group">
        <label>Mother's name</label>
        <input
          type='text'
          name='Mothername'
          placeholder='Mother name'
          value={Mothername}
          onChange={handleChange}
        />
        {Errors.Mothername && <span className='error'>{Errors.Mothername}</span>}
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type='date'
          name='Date'
          value={Date}
          onChange={handleChange}
        />
      <div>
      {Errors.Date && <span className='error'>{Errors.Date}</span>}

      </div>
      </div>
      <div className="form-group">
        <select name='gender' value={gender} onChange={handleChange}>
          <option value="" disabled>------choose gender-------</option>
          {Gender.map((e)=>(
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          ))}
         


        </select>

        <div>
        {Errors.gender && <span className='error'>{Errors.gender}</span>}
        </div>

      </div>
      <div className="form-group">
        <select name='state' value={state} onChange={handleChange}>
          <option value="" disabled>------State of Origin-------</option>
          {State.map((e)=>(
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
      <div>
      {Errors.state && <span className='error'>{Errors.state}</span>}
      </div>
      </div>

      <div className="form-group">
        <label>Father's name</label>
        <input
          type='text'
          name='Fathername'
          placeholder='Father name'
          value={Fathername}
          onChange={handleChange}
        />
        {Errors.Fathername && <span className='error'>{Errors.Fathername}</span>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type='password'
          name='Password'
          value={Password}
          onChange={handleChange}
          placeholder='Password'
        />
        {Errors.Password && <span className='error'>{Errors.Password}</span>}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          placeholder='Confirm Password'
        />
        {Errors.confirmPassword && <span className='error'>{Errors.confirmPassword}</span>}
        <button type='submit'>Submit</button>

      </div>




    </form>
  )
}

export default FormValidation



// echo "# Form-Validation" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dev-mike3/Form-Validation.git
// git push -u origin main

// git remote add origin https://github.com/dev-mike3/Form-Validation.git
// git branch -M main
// git push -u origin main
