

import { useNavigate } from "react-router-dom"
import Calendar from 'react-calendar'
import { useState } from "react";



const services = [
  'Haircut',
  'Hair Coloring',
  'Deep Conditioning',
  'Bridal Styling',
  'Event Styling'
];

const stylists = [
  'Emily Johnson',
  'Michael Lee',
  'Sarah Brown'
];



const Booking = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [stylist,setStylist]=useState('')
  const [service, setService] = useState('')
  const [date,setDate]=useState(new Date())
  const navigate=useNavigate()
// handle submit form
const handleSubmit = async(e) => {
  e.preventDefault()
  const response=await fetch('http://localhost:5000/apibookings',{
    method:'POST',
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify({name,email,date,service,stylist})
  })
  // redirect and message for customer

  if (response.ok) {
    alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times.`);
    navigate('/');
  } else {
    alert('Booking failed. Please try again.');
  }
}

 
  return (
    <div className=" dark:text-slate-500 bg-slate-900 p-12">
      <h2 className="text-2xl capitalize font-bold mb-10">Book an appointment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 roundex-xl border p-12 w-full">
        {/* name */}
        <label htmlFor="">Name</label>
        <input type="text" className="rounded border p-4 " placeholder='Name' id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        {/* email */}
        <label htmlFor="">Email</label>
        <input type="text" className="rounded border p-4" placeholder='Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {/* calendar */}
        <Calendar
            onChange={setDate}
            value={date}
          required
          className='text-center flex flex-col gap-4 bg-slate-300 p-4'
        />
        {/* current date */}
        <p>Selected Date: {date.toLocaleDateString()}</p>
        {/* services */}
        <label htmlFor="">Service</label>
        <select className="rounded border p-4" placeholder='Service' id="service" value={service} onChange={(e) => setService(e.target.value)} required>
        <option value="" disabled>Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
        </select>
        {/* stylist */}
        <label htmlFor="">Stylist</label>
        <select className="rounded border p-4" placeholder='Service' id="stylist" value={stylist} onChange={(e) => setStylist(e.target.value)} required>
        <option value="" disabled>Select a stylist (optional)</option>
            {stylists.map((stylist, index) => (
              <option key={index} value={stylist}>{stylist}</option>
            ))}
        </select>
      </form>
    </div>
  )
}

export default Booking