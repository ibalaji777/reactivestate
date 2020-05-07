

let angalware_data_store={},element_checked=false,element_name='';
function rstate(fn){
  let myNode=document.querySelectorAll('*[angalware]');

  //set default value
  myNode.forEach(element => {

          // watching(angalware_data_store,element.getAttribute("angalware"),,(obj,set_val)=>{   data_bind(obj,set_val) });

  
   if(element.type!="radio"&&element.type!="checkbox")
      // angalware_data_store[element.getAttribute("angalware")]=element.value,
      watching(angalware_data_store,element.getAttribute("angalware"),element.value,(obj,set_val)=>{   data_bind(obj,set_val); });
   else
     if(element.checked)
     element_checked=true,
     element_name=element.getAttribute("angalware"),
    //  angalware_data_store[element.getAttribute("angalware")]=element.value,
     watching(angalware_data_store,element.getAttribute("angalware"),element.value,(obj,set_val)=>{   data_bind(obj,set_val) });
       else
      if(!element_checked&&element_name!=element.getAttribute("angalware"))
      watching(angalware_data_store,element.getAttribute("angalware"),"",(obj,set_val)=>{   data_bind(obj,set_val) });
      // angalware_data_store[element.getAttribute("angalware")]="";
      // watching(angalware_data_store,element.getAttribute("angalware"),()=>{  /* eslint-disable-line*/   },(obj,set_val)=>{   data_bind(obj,set_val) });
      else
         element_name="",
         element_checked=false;
          });//end loop

          fn(true,angalware_data_store);

  document.addEventListener('input',(e)=>{
    fn(false,angalware_data_store)  
      angalware_data_store[e.target.getAttribute('angalware')]=e.target.value;
     
  
        })
  }
    //data bind to input by watchin while set the value
  function data_bind(angalware,value){
    console.log(angalware,value)


    let options=[];
    let myNode=document.querySelectorAll('*[angalware]');
      myNode.forEach(element => {
      if(element.getAttribute("angalware")==angalware){
         if(element.getAttribute("type")!="radio"&&element.getAttribute("type")!="checkbox"&&element.tagName!="SELECT")
        element.value=value;
         if(element.getAttribute("type")=="radio"&&element.getAttribute("value")==value) 
         element.checked=true;
         if(element.getAttribute("type")=="checkbox"&&element.getAttribute("value")==value)
         element.checked=true; 
         if(element.tagName=="SELECT")
         options=element.childNodes,
         options.forEach(el => {
              if(el.value==value)
                el.selected=true;
  
            });
      }
  
    })
    // angalware_data_store[angalware]=value;
   }
  
   //watch data changes
  function watching(obj_parent,inside_obj,arg,watcher_set){
  // console.log("setten")
    Object.defineProperty(obj_parent, inside_obj, {
    get: function (){
  
      // watcher_get(inside_obj,val);

      return arg;
    },
  
    set: function (val) {
  // angalware_data_store[inside_obj]=val;
  arg=val;   
  watcher_set(inside_obj,val)
     

    }
  })
  
  
  }
// module.exports = { 

//     rstate
// }

