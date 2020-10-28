



export const validateEmail = (email) => {
    const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegx.test(email) 

        

}


export const validateDate = (_date) => {

   const dateRegx= /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    

        if (!checkDate.test(_date))
            return "invalidDate";

        let date = new Date(_date);


        if (date.getFullYear() > 2003)
            return "toSmall";



        return date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();


    

   


}


export const validateImageUrl = (url) => {

  const  imageUrl=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g

          return imageUrl.test(url);
           
           

}


export const validatePanCard = (pan) => {

   const pancard = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

     return pancard.test(url);

}


export const validateFields=(data)=>{


    return (data.first_name && data.pan_number && data.dob && data.gender && data.email && data.profile_image)



}