import React from 'react'



const Profile = () => {
    return (
       <div>
           <div style={{
               display:"flex",
               justifyContent:"space-around",
              
           }}>
               <div>
               <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
               src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"}
               />
               </div>
               <div>
                   <h4>Ashley Dencs</h4>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>20 posts</h6>
                       <h6>100 followers</h6>
                       <h6>50 following</h6>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Profile