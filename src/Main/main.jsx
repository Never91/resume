import React from 'react';
import './main.css';
import Icon1 from '../Images/1593085396359.jpeg';
import Icon2 from '../Images/GitHub-Mark.png';
import Icon3 from '../Images/pngtree-programming-icon-trendy-style-isolated-background-png-image_4834681.jpeg';



export default function Main({Main}) {
    return (
        <main className = {'main'}>
            <section className = {'services'}>

                <h5 className = {'services_logo'}>I & about Me</h5>
                <p className = {'services_text'}> Привіт! Мене звати Максим Бугай, я розробник та frontend програміст!</p>

                <div className = {'card_contaier'}>
                    <div className = {'services_card'}>
                        <div className = {'card_icon'}>
                            <a href="https://is.gd/RDGqKe" ><img src={Icon1} className = {'icon'}/></a>
                        </div>
                        
                        <h5 className = {'card_h4'}> Comunications</h5>
                        <p className = {'card_p'}>Я працював над багатьма проектам і в різних командах. Я можу виконуваті роль у проекті як тімлід, або звичайний виконаветць. Добре адаптуюсь для різних фреймворків та областей розробки </p>

                    </div>
                    
                    <div className = {'services_card'}>
                        <div className = {'card_icon'}>
                            <a href="https://github.com/Never91"><img src={Icon2}  className = {'icon'}/></a>
                        </div>
                        
                        <h5 className = {'card_h4'}>Projects</h5>
                        <p className = {'card_p'}>Маю невелику уількість різних проекрів на цікаві теми, таке собі портфоліо з цікавою історією створення.Невелике, але може вас зацікавити </p>

                    </div>

                    <div className = {'services_card'}>
                        <div className = {'card_icon'}>
                        <a href="https://github.com"><img src={Icon3}  className = {'icon'}/></a>
                        </div>
                        
                        <h5 className = {'card_h4'}>Skills</h5>
                        <p className = {'card_p'}>Вмію працювати з front end & могу адаптуватия під ситуатцію. Розумію як влаштовані бази данних та програми C++/C#. Вмію працювати з Miro,Trello, GF.</p>
                    </div>
                    





                </div>


            </section>
        </main>
    )
}
