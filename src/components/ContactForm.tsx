import { useForm, Controller, FieldValues } from 'react-hook-form';

function ContactForm() {
    const { handleSubmit, control, reset } = useForm();

    const onSubmit = (data: FieldValues) => {
        // Handle form submission here (e.g., send data to server)
        console.log(data);
        // Clear the form after submission
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-center'>Keep Contact:</h3>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" className="form-control" />}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="email" className="form-control" />}
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <textarea {...field} className="form-control" />}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default ContactForm;
