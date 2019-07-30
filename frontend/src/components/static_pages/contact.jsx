import React, { Component } from "react";
import "./contact.css";
import "react-bootstrap";



const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


const validPhoneRegex= RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);



const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};
class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      number: null,
      isLimit:null,
      isinvalid: true,
      errors: {
       name:'' , email: '', number: '', isLimit:''
      }
    };
  }
 
 

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 5
            ? 'Full Number must  5 characters long!'
            : '';
          
            
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;

      case 'phone':
       errors.number = validPhoneRegex.test(value) ? '' :'Enter valid number (xxx)xxx-xxxx';

      break;

      case 'message':

      console.log(value.length,"value lenghttt");

    errors.isLimit = value.length < 255 ? '' : 'You have exceeded the text limit of 255';


    console.log('this is the lengthhh' ,value.length)
       
      break;

      default:
        break;
    }

    this.setState({errors, [name]: value});

    
    console.log(errors.isLimit.length,"gwllwej");

    const errorsObject = this.state.errors;

    const errArrayValue = Object.values(errorsObject);

 
    console.log("array values",errArrayValue);
     const booleanfunction = errArrayValue.every(this.checkErrors);

      console.log("this is the boolean", booleanfunction)

    if(booleanfunction ){
    if(validateForm(this.state.errors)){
      console.info('valid form');
      this.setState({
        isinvalid:false
      })


    }

    else{
      console.error('invalid form');
      this.setState({
        isinvalid:true
      })
    }

  }

  else{
    this.setState({isinvalid:true});
  }
  }



  checkErrors = (arr) =>{  

     console.log(arr,"solve the logic")
    if(arr == ""){

      return true
    }

    else{
      return false
    }



  }

  // textlimit =(e) =>{

  //   console.log(e.target.value,"this is the value");

  //   const textlimit = e.target.value;

  //   console.log(textlimit.length,"this is the value of the limit");


  //   const textlength = textlimit.length;

  //    const boolean = this.alertlimit(textlength)


  
    

  // }


  // alertlimit = (textlimit) => {


  //   if(textlimit == 255) {

  //     errors.isLimit = "You have reach the text limit 255 letters";
  //   }


  //   this.setState({})
      
  // }


  // createAlert =(message, className) =>{

  //   const createDiv = document.createElement('div');

  //   createDiv.setAttribute('class',className);


  //   createDiv.innerText(message);




  // }

  
  handleSubmit = (event) =>{
    event.preventDefault();


   

  }

  render() {

    const {errors} = this.state;

  

    const errorArray = Object.entries(errors);

    console.log('array',errorArray);
   
    console.log('this the name length',errors.name.length)

    console.log(errors.length);
    console.log('console.errors',errors);
    return (
      <div className="container">
        <h1 className="mt-5">Contact us</h1>
        <div className="main-content container col-sm-6 float-right mt-5">
          <div className="mt-4">
            <p>Hello Ms. or Mr. Wonderful,</p>
            <p>
              Thank you for checking out our website and considering the Young
              Masterbuilders in Motion (<strong>YMIM</strong>) as your charity
              of choice.
            </p>
            <p>
              Together we can work to make a difference in the lives
              of&nbsp;young adult women orphans, adoptees, and foster youth
              teens and alumnae.
            </p>
            <p>
              Use the form below to let us know what’s on your mind and how we
              can help.
            </p>
            <p>Until next time,</p>
            <p>Kim Wright, MBA, U.S. Army Veteran</p>
            <p>Foster Youth Alumna</p>
            <p>Founder, Young Masterbuilders in Motion</p>
            <p>Email: Founder@theymim.org |&nbsp;Phone: 773.941.1200</p>
            <p>&nbsp;</p>
          </div>
        </div>
        <div className="container col-sm-6 float-left mt-5">
          <form action="/" >
            <div>
              <label for="name" className="col-xs-4 ">
                Name (required)
              </label>
              <input 
              onChange={this.handleChange}
              id="name" 
              required="" 
              name="name" 
              type="text" 
              className="col-md-10 " />

{errors.name.length > 0 && 
              <span className='error'>{errors.name}</span>}
            </div>
            <br />
            <div>
              <label for="email" className="col-xs-4">
                Email (required)
              </label>
              <input
                onChange={this.handleChange}
                id="email"
                required=""
                name="email"
                type="email"
                className="col-md-10"
              />
              {errors.email.length > 0 && 
              <span className='error'>{errors.email}</span>}
            </div>
            <br />
            <div>
              <label for="phone" className="col-xs-4">
                Phone (required)
              </label>
              <input onChange={this.handleChange}
               id="phone"
                type="number" 
                name="phone"                
                className="col-md-10" />
                {errors.number.length > 0 && 
                <span className='error'>{errors.number}</span>}
            </div>
            <br />

            <div>
              <label className="col-xs-4 mt-3 mb-1 messager">Message</label>
              <textarea onChange={this.handleChange} maxlength="255" name="message" rows="6" className="col-md-10 mb-4"></textarea>
              { errors.isLimit.length > 0 &&
              <span className="error">{errors.isLimit}</span>}


            </div>

            <div className="col-xs-8 mb-5 ">
             {
               
               this.state.isinvalid ? (''):(<p>
                <button className="button" type="submit" value="Submit">
                  <span className="buttonSpan">Submit</span>
                </button>
              </p>)

             }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
