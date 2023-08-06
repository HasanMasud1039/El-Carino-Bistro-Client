import { Helmet } from "react-helmet-async";


const AddItem = () => {
    return (
        <div>
            <Helmet>
                <title>el Cariño Bistro | Add Item</title>
            </Helmet>
            <h1 className="text-center text-3xl  uppercase mt-12">Add Item</h1>
            <form className="card-body  border-2 rounded-xl bg-slate-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                        <input type="text" name="name" placeholder="Name of Dish" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                        <input type="text" name="photo" placeholder="Photo of Dish" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                        <input type="text" name="price" placeholder="Price($)" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                        <input type="textarea" name="description" placeholder="Description" className="input input-bordered h-20" />
                    </label>

                </div>
                <div className="text-center">
                    <button className="btn btn-warning">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;