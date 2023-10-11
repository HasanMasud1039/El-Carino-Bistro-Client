import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth/useAuth";


const Reservation = () => {
    const {user} = useAuth();
    return (
        <div>
            <Helmet>
                <title>el Cariño Bistro | Reservation</title>
            </Helmet>
            <h1 className="text-center text-3xl font-bold  uppercase mt-8">Add Reservation</h1>
            <form className="card-body  border-2 rounded-xl bg-slate-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                        <input type="text" name="name" placeholder={user.displayName} className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                        <input type="date" name="date"  className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Time</span>
                        <input type="time" name="time"  className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of Seat</span>
                        <input type="number" name="seat"  className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                        <input type="email" name="email" placeholder={user.email} className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Contact No.</span>
                        <input type="text" name="contact" placeholder="Contact No." className="input input-bordered" />
                    </label>
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                        <input type="textarea" name="description" placeholder="Description" className="input input-bordered h-20" />
                    </label>

                </div>
            </form>
                <div className="text-center mb-4">
                    <button className="btn btn-warning">Confirm Reservation</button>
                </div>
        </div>
    );
};

export default Reservation;