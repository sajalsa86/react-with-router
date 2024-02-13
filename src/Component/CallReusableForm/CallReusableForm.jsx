import ReusableForm from "../ReusableForm/ReusableForm";

const CallReusableForm = () => {

    const handleSingUpSubmit = data => {
        console.log("Sing Up Data", data);
    };
    const handleProfileUpdate = data => {
        console.log("Update Profile", data);
    };

    return (
        <div>
            <ReusableForm
                // formTitle={'Sing Up'}
                handleSubmit={handleSingUpSubmit}
            >
                <div>
                    <h2>Sing Up</h2>
                    <p>Please Sing Up Right Now</p>
                </div>
            </ReusableForm>


            <ReusableForm
                // formTitle={'Profile Update'}
                handleSubmit={handleProfileUpdate}
                submitBtnText='Update'
            >
                <div>
                    <h2>Profile Update</h2>
                    <p>Always keep your profile update</p>
                </div>
            </ReusableForm>

        </div >
    );
};

export default CallReusableForm;