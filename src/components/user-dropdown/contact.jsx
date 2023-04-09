
import ContactTopArea from "@containers/contact-top";
import ContactFormArea from "@containers/contact-form";
import GoogleMapArea from "@containers/google-map";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Contact = (props) => (
        
        
        <main id="main-content">
            <ContactTopArea data={props} />
            <ContactFormArea data={props}/>
            <GoogleMapArea data={props}/>
        </main>
);

export default Contact;
