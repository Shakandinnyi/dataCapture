import Service from './Service';

const Feed = ({ services }) => {
    return (
        <>
            {services.map(service => (
                <Service key={service.id} service={service} />
            ))}
        </>
    )
}

export default Feed