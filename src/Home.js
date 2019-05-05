import React, {Component} from 'react';
import './css/Home.css';

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <h1 id="title"><i>Vizinate</i></h1>
                <div id="mission_statement">
                    <h3>Our Mission Statement</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit vel dui eget pharetra.
                        Pellentesque lacinia euismod nisl, eget gravida felis pulvinar eu. Aenean eget magna ut urna
                        fermentum sodales eu nec mauris. Vestibulum molestie venenatis tortor, eu lobortis nulla sodales
                        id.
                        In vestibulum facilisis velit sit amet maximus. Nam justo est, accumsan eget libero non, commodo
                        cursus metus. Nunc quis consectetur ex. Maecenas nisl urna, aliquam eu sodales quis, ornare in
                        quam.
                        Donec sagittis ac lorem quis ornare. Proin feugiat justo auctor elit auctor vehicula. Ut
                        convallis
                        tincidunt pretium. Curabitur sit amet justo a magna vulputate vestibulum id nec quam. Nunc
                        hendrerit
                        luctus diam, nec mattis nibh congue sit amet. Aenean ac purus eget sem consequat accumsan. Nam
                        condimentum sapien ac tincidunt convallis. In congue posuere rutrum.</p>
                    <h3>Impact</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit vel dui eget pharetra.
                        Pellentesque lacinia euismod nisl, eget gravida felis pulvinar eu. Aenean eget magna ut urna
                        fermentum sodales eu nec mauris. Vestibulum molestie venenatis tortor, eu lobortis nulla sodales
                        id.
                        In vestibulum facilisis velit sit amet maximus. Nam justo est, accumsan eget libero non, commodo
                        cursus metus. Nunc quis consectetur ex. Maecenas nisl urna, aliquam eu sodales quis, ornare in
                        quam.
                        Donec sagittis ac lorem quis ornare. Proin feugiat justo auctor elit auctor vehicula. Ut
                        convallis
                        tincidunt pretium. Curabitur sit amet justo a magna vulputate vestibulum id nec quam. Nunc
                        hendrerit
                        luctus diam, nec mattis nibh congue sit amet. Aenean ac purus eget sem consequat accumsan. Nam
                        condimentum sapien ac tincidunt convallis. In congue posuere rutrum.</p>
                </div>
                <div id="button_container">
                    <div id="donate">
                        <h2>Want to donate?</h2>
                        <button>Create an account</button>
                    </div>
                    <div id="sign_up">
                        <h2>Looking for help?</h2>
                        <button>Find out how</button>
                    </div>
                    <div id="login_home">
                        <h2>Have an account?</h2>
                        <button>Log in</button>
                    </div>
                </div>
            </div>
        );
    }
}
