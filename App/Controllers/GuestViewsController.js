/**
 * @author Leon Mwandiringa
 * @uses define the guest views controllers
 * @return mixed views handler classes
 */

 class GuestViewsController{

    static index(){

        return (req, res)=>{

                res.render("home");
        }

    }

 }

 module.exports = GuestViewsController;