

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="md:w-4/12 my-4 text-center mx-auto">
            <p className="text-yellow-600">--- {subheading} ---</p>
            <h3 className="text-xl md:text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;