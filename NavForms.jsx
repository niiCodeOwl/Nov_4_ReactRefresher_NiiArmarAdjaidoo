
import React, {Component} from 'react';
import axios from 'axios'
class NavForm extends Component{

    validate() {
        let values = document.getElementById("firstname").value;
        if(isNaN(values)){
            
         }else{
            document.getElementById("firstname").value = ""
         }
    }
   
    proceedClicked(){

        //personal informatin data
            let firstname = document.getElementById("firstname").value;
            let lastname = document.getElementById("lastname").value;
            let middlename = document.getElementById("middlename").value;
            let dob = document.getElementById("dob").value;
            let nationality = document.getElementById("nationality").value;
            let status = document.getElementById("status").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let radio = document.getElementById("radio").value;

        //address
        let address1 = document.getElementById("address1").value;
        let address2 = document.getElementById("address2").value;
        let country1 = document.querySelector("#country1").value;
        let country2 = document.querySelector("#country2").value;
        let state1 = document.querySelector("#state1").value;
        let state2 = document.querySelector("#state2").value;
        let city1 = document.querySelector("#city1").value;
        let city2 = document.querySelector("#city2").value;
        let zip1 = document.querySelector("#zip1").value;
        let zip2 = document.querySelector("#zip2").value;
        
    

    //employment information
        let emptype = document.getElementById("emptype").value;
        let nss = document.getElementById("nss").value;
        let empname = document.getElementById("empname").value;
        let tin = document.getElementById("tin").value;
        let net = document.getElementById("net").value;
        let source = document.getElementById("source").value;

        if(firstname == "" ||
            lastname == "" ||
            middlename == "" ||
            dob == "" ||
            email == "" ||
            phone == "" ||
            address1 == "" ||
            address2 == "" ||
            country1 == "others" ||
            country2 == "others" ||
            city1 == "" ||
            city2 == "" ||
            zip1 == "" ||
            zip2 == "" ||
            nss == "" ||
            empname == "" ||
            tin == "" ||
            source == ""){
                alert("Sorry but some fields are required")
            }else{

            // Send a POST request
            axios({
                method: 'post',
                url: '/submitted.js',
                data: {
                firstName: this.firstname,
                lastName: this.lastname,
                middleName: this.middlename,
                dob:this.dob,
                email:this.phone,
                phone:this.phone,
                status:this.status,
                address1:this.address1,
                address2:this.address2,
                country1:this.country1,
                country2:this.country2,
                city1:this.city1,
                city2:this.city2,
                zip1:this.zip1,
                zip2:this.zip2,
                nss:this.nss,
                empname:this.empname,
                tin:this.tin,

                }
            }).then(function (response) {
                console.log(response.data)
              });;


            }

           


    };

 

   
        render(){
        return (
        
         

            <div>
                
                <form name="myForm">

                <div className=" bg-white  flex flex-wrap p-6">


                <div className="w-1/2 border-3">
                    
                <section className="1 flex flex-wrap border rounded shadow p-5 mr-2">

                <div class="w-full">
                <label class="block  text-sm font-bold mb-2" for="username">
                    <h3 className="text-red-500">Identification Document</h3>
                </label>
                </div>

                <div class="justify-center  self-center">
                <img id="image-previewer" width="150px" height="150px" class="" src="/src/assets/user.png"/>
                </div>


                 <div class="w-full">
                <label class="block  text-sm font-bold mb-2" for="username">
                </label>
                <input class="w-full bg-red-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="file" name="file"/>
                
                </div>


                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
         
                </label>
                <select id="status" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option disabled>Document Type</option>
                <option>Images*</option>
               
                </select>
                </div>


                <div class="mb-4  w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                
                </label>
                <button class="w-full bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Upload
                </button>
                </div>

                </section>
                <br></br>
                <section className="2  border rounded shadow flex-wrap flex p-5 mr-2">

                <div class="w-full">
                <label class="block  text-sm font-bold mb-2" for="username">
                    <h3 className="text-red-500">Personal Information</h3>
                </label>
                </div>



                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    <span className="text-red-700">*</span> First Name
                </label>
                <input onChange={this.validate} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name"/>
                </div>


                <div class="mb-4  w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> Middle Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="middlename" type="text" placeholder="Middle Name"/>
                </div>

                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> Last Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name"/>
                </div>


                <div class="mb-4  w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Date of Birth
                </label>
                <input id="dob" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" placeholder="Date Of Birth"/>
                </div>


                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> Nationality
                </label>
                <select id="nationality" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Ghanaian</option>
                <option>Nigerian</option>
                <option>Others</option>
                </select>
              
                </div>




                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> Marital Status
                </label>
                <select id="status" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widow">Widow</option>
                </select>
                </div>



                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    <span className="text-red-700">*</span> Email Address
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                </div>


                <div class="mb-4  w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> Phone Number
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone Number"/>
                </div>


               

                <section className="p-3" >

                <input type="radio" name="radio" id="radio"/><span className="mr-3" >Resident Individual</span>
                <input type="radio" name="radio" id="radio"/><span className="mr-3" >Non Resident</span>
                <input type="radio" name="radio" id="radio"/><span className="mr-3" >foreign National</span>
                </section>
                
                    
                </section>

                </div>




                <div className="w-1/2">
                    
                <section className="2 border rounded shadow flex-wrap flex p-5">

                <div class="w-full">
                <label class="block  text-sm font-bold mb-2" for="username">
                    <h3 className="text-red-500">Address</h3>
                </label>
                </div>


                <div class="mb-4 w-1/2 p-1">

                <h3>Physical Address</h3>
                </div>


            <div class="mb-4  w-1/2 p-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            
            </label>
            <h3>Mailing Address (Optional)</h3>
            </div>





            <div class="mb-4 w-1/2 p-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            <span className="text-red-700">*</span> Address
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address1" type="text" placeholder="Address"/>
            </div>


            <div class="mb-4  w-1/2 p-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            <span className="text-red-700">*</span> Address
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address2" type="text" placeholder="Adderss"/>
            </div>

            <div class="mb-4 w-1/2 p-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        
                </label>
                <select id="country1" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="Others" selected>Choose Country</option>
                <option value="Nigerian">Nigerian</option>
                <option value="Ghanaian">Ghanaian</option>
                </select>
              
                </div>




                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                
                </label>
                <select id="country2" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="Others" selected>Choose Country</option>
                <option value="Nigerian">Nigerian</option>
                <option value="Ghanaian">Ghanaian</option>
                </select>
                </div>


                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                
                </label>
                <select id="state1" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="Others"selected>Choose State</option>
                <option value="Accra">Accra</option>
                <option value="Kumasi">Kumasi</option>
                <option value="Takoradi">Takoradi</option>
                </select>
              
                </div>




                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
               
                </label>
                <select id="state1" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="Others" selected>Choose State</option>
                <option value="Accra">Accra</option>
                <option value="Kumasi">Kumasi</option>
                <option value="Takoradi">Takoradi</option>
                </select>
                </div>


                <div class="mb-4 w-1/2 p-1">
<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
<span className="text-red-700">*</span> City
</label>
<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city1" type="text" placeholder="City"/>
</div>


<div class="mb-4  w-1/2 p-1">
<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
<span className="text-red-700">*</span> City
</label>
<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city2" type="text" placeholder="City"/>
</div>


<div class="mb-4 w-1/2 p-1">
<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
<span className="text-red-700">*</span> Zip Code
</label>
<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip1" type="number" placeholder="Zip Code"/>
</div>


<div class="mb-4  w-1/2 p-1">
<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
<span className="text-red-700">*</span> Zip Code
</label>
<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip2" type="number" placeholder="Zip code"/>
</div>


    
</section>
<br></br>

<section className="2 border rounded shadow flex-wrap flex p-5">

                <div class="w-full">
                <label class="block  text-sm font-bold mb-2" for="username">
                    <h3 className="text-red-500">Employment Information</h3>
                </label>
                </div>

                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Employment type
                </label>
                <select id="emptype" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option disabled>Employment Type</option>
                <option>First Class</option>
                <option>Middle Class</option>
                <option>Lower Class</option>
                </select>
                </div>


                <div class="mb-4  w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> SSN
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ssn" type="text" placeholder="SSN"/>
                </div>

                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    <span className="text-red-700">*</span> Employer Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="empname" type="text" placeholder="Employer Name"/>
                </div>


                <div class="mb-4  w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> TIN
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tin" type="text" placeholder="Tin Number"/>
                </div>


                <div class="mb-4 w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Net Worth
                </label>
                <select id="net" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            
                <option>GHc 2000</option>
                <option>GHc 3500</option>
                <option>GHc 4000</option>
                </select>
                </div>


                <div class="mb-4  w-1/2 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                <span className="text-red-700">*</span> Source of Income
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="source" type="text" placeholder="Middle Name"/>
                </div>

<section>

<button onClick={this.proceedClicked} class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Proceed
</button>

</section>

    
</section>

                </div>

            </div>

            </form>

            </div>
         

            );


            
        }
}
 
export default NavForm;

