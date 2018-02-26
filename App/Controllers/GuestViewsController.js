/**
 * @author Leon Mwandiringa
 * @uses define the guest views controllers
 * @return mixed views handler classes
 */

 class GuestViewsController{

    static index(){

        return (req, res)=>{

                res.send("its working bro");
        }

    }

 }

 module.exports = GuestViewsController;