import Card from "../components/career-card/CareerPathCard";

export default function EmployeeView(){
    return(
        <>
            <h1>Career Growth Portal</h1>
            <Card
                image="https://images.pexels.com/photos/18650066/pexels-photo-18650066/free-photo-of-people-working-on-macbooks-sitting-by-the-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                department="Tech Department"
            />


            <Card
                image="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                department="Marketing  Department"
            />

            <Card
                image="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                department="HR Department"
            />



        </>
    )
}