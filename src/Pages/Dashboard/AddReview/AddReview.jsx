import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth/useAuth";


const AddReview = () => {
    const {user} = useAuth();
    return (
        <div>
            <Helmet>
                <title>el Cariño Bistro | Add Review</title>
            </Helmet>
            <h1 className="text-center text-3xl  uppercase mt-12">Add Review</h1>
            <form className="card-body  border-2 rounded-xl bg-slate-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                        <input type="text" name="name" placeholder={user.displayName} className="input input-bordered" />
                    </label>
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                        <input type="textarea" name="description" placeholder="Description" className="input input-bordered h-20" />
                    </label>

                </div>
                <div className="text-center">
                    <button className="btn btn-warning">Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;