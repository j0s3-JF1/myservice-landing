import React, { useRef } from "react";

//Importe de estilo

import styles from './Home.module.css';

//Importe imagens

import Logo from '../../assets/New Logo.png';
import LogoB from '../../assets/Logo.png';
import Icone from '../../assets/Saly-10.png';
import Service from '../../assets/Icon.png';
import MockupPerfil from '../../assets/Mockup1.png';
import MockupRede from '../../assets/Mockup.png';
import MockupPremium from '../../assets/MockupPremium.png';
import MockupWork from '../../assets/MockupWork.png';
import Interrogação from '../../assets/inter.png';
import Video from '../../assets/MockupVideo.png';
import Play from '../../assets/PlayIcon.png';
import WhatsApp from '../../assets/Whats.Vector.png';
import Instagram from '../../assets/Insta.Vector.png';
import Twitter from '../../assets/TT.Vector.png';
import Email from '../../assets/EmailIconBlue.png';
import WhatsIcon from '../../assets/WhatsIonBlue.png';

function Home() {

    const sobre = useRef();
    function scrollTo(ref) {
        window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
    }

    return (
        <div>
            <div /* Princiapl */ className={styles.PrincipalContainer}>

                {/* My Service */}

                <div className={styles.LogoContainer}>
                    <img src={Logo} />
                </div>
                <div className={styles.titulo1}>
                    <h1>
                        My Service
                    </h1>
                </div>
                <div className={styles.titulo2}>
                    <h4>
                        O nosso site My Service, será um aplicativo para divulgar e contratar serviços em gerais.
                    </h4>
                </div>
                <div className={styles.IconContainer}>
                    <img src={Icone} />
                </div>

                {/* Conhaça um pouco sobre nos */}

                <div className={styles.ConhecaContainer}>
                    <div className={styles.fundo1}> </div>
                    <div className={styles.conheca}>
                        <h1>
                            Conheça nos
                        </h1>
                    </div>
                    <div className={styles.sobre}>
                        <h4>
                            Somos um grupo de jovens que cursa Desenvolvimento de Sistemas na Etec, e decidiu fazer um app e site para ajudar pessoas a divulgarem seus serviço
                        </h4>
                    </div>
                    <button onClick={() => scrollTo(sobre)} className={styles.button}>
                        Saiba mais
                    </button>
                </div>

                {/* Baixe o nosso aplicativo*/}

                <div className={styles.BaixeContainner}>
                    <div className={styles.MockupPerfil}>
                        <img src={MockupPerfil} />
                    </div>
                    <div className={styles.baixe}>
                        <h1>
                            Baixe o nosso aplicativo agora
                        </h1>
                    </div>
                    <div className={styles.infbaixe}>
                        <h5>
                            O cliente pode cadastar-se e contratar serviços, o cliente pode curti os serviços e até compartilhar; O trabalhador, pode compartilhar seus trabalhos e até mesmo contrar outros serviços
                        </h5>
                    </div>
                    <div className={styles.baixa}>
                        <h4>
                            Baixe o nosso aplicativo
                        </h4>
                    </div>
                    <button className={styles.button1}>
                        Clique aqui
                    </button>
                </div>

                {/* My Service Work*/}

                <div className={styles.WorkContainer}>
                    <div className={styles.MockupWork}>
                        <img src={MockupWork} />
                    </div>
                    <div className={styles.baixeWork}>
                        <h1>
                            Baixe o nosso aplicativo Work agora
                        </h1>
                    </div>
                    <div className={styles.sobreWork}>
                        <h5>
                            No My Service Work, você fornecedor, consiguira ver suas estatísticas, o quanto você está faturando e os comentários feitos pelos clientres
                        </h5>
                    </div>
                    <div className={styles.baixeW}>
                        <h4>
                            Baixe o nosso aplicativo
                        </h4>
                    </div>
                    <button className={styles.buttonW}>
                        Clique aqui
                    </button>
                </div>

                {/* Premium*/}

                <div className={styles.PremiumContainer}>
                    <div className={styles.MockupPremium}>
                        <img src={MockupPremium} />
                    </div>
                    <div className={styles.acesse}>
                        <h1>
                            Acesse o nossos planos premium
                        </h1>
                    </div>
                    <div className={styles.sobrePremium}>
                        <h5>
                            O nossos planos premium são acessados para os fornecedores de serviço, há três planos premium, o bronze, o prata e o diamante
                        </h5>
                    </div>
                    <div className={styles.sobrePremium2}>
                        <h5>
                            O bronze você irá pagar 9,99/mês, o prata 24,99/mês e o diamante irá custar 79,99/mês
                        </h5>
                    </div>
                </div>

                {/* Saiba mais */}

                <div className={styles.SaibaContainer} >
                    <div className={styles.saiba} ref={sobre}>
                        <h1>
                            Conheça nos
                        </h1>
                    </div>
                    <div className={styles.somos} >
                        <h5>
                            Somos um grupo de jovens que cursa Desenvolvimento de sistemas na Etec, e decidiu fazer um aplicativo e site para ajudar pessoas a divulgarem seu serviço.
                        </h5>
                    </div>
                    <div className={styles.somos2} >
                        <h5>
                            Este grupo é formado pelos jovens: Camilly Nascimento, Emerson Sales, João Pedro e José Vinicius
                        </h5>
                    </div>
                </div>

                {/*  O porq esccolhemos este tema */}

                <div className={styles.PorqContainer}>
                    <div className={styles.interrogacao}>
                        <img src={Interrogação} />
                    </div>
                    <div className={styles.porq} >
                        <h1>
                            Por que escolhemos este tema?
                        </h1>
                    </div>
                    <div className={styles.escolhemos}>
                        <h4>
                            Escolhemos o tema por que vemos a dificuldade de pessoas autônomas encontrem serviço, o nosso aplicativo é uma forma de mostrarem seus trabalhos para outras pessoas e divulgarem fotos deles, no nosso aplicativo você pode até mesmo colocar seu comercio e divulgar o que vende.
                        </h4>
                    </div>
                </div>
            </div>

            <div className={styles.SecundariaContainer} >

                {/*  Sobre a nossa rede social */}
                <div className={styles.RedeContainer}>
                    <div className={styles.MockupRede}>
                        <img src={MockupRede} />
                    </div>
                    <div className={styles.saibamais}>
                        <h1>
                            Saiba mais sobre a gente em nossas redes sociais
                        </h1>
                    </div>
                    <div className={styles.siga}>
                        <h6>
                            Siga a gente
                        </h6>
                    </div>
                    <div className={styles.fundo2}></div>
                    <button className={styles.button2}>
                        Clique aqui
                    </button>
                </div>
            </div>

            <div /* Video*/ className={styles.TerceiraContainer}>
                <div className={styles.VideoContainer}>
                    <a href="https://youtu.be/LntH7FHw-QQ" target="_blank" className={styles.Thumbnail}>
                        <span></span>
                        <img src={Video} />
                    </a>
                </div>
                <div className={styles.ComoUsar}>
                    <h1>
                        Como usar o nosso aplicativo perfeitamente
                    </h1>
                </div>
                <div className={styles.VideoAbaixo}>
                    <h5>
                        No video abaixo, você aprenderá a se cadastrar no nosso aplicativo e como ele funciona
                    </h5>
                </div>

                <div /* Footer */ className={styles.FooterContainer} >
                    <footer className={styles.footer}>
                        <div className={styles.LogoBContainer}>
                            <img src={LogoB} />
                        </div>
                        <div className={styles.Informacoes}>
                            <h5 >
                                Brasil
                            </h5>
                            <h5>
                                Política de Privacidade
                            </h5>
                            <h5>
                                Termos de Uso
                            </h5>
                            <h5>
                                © 2022 My Service.
                            </h5>
                        </div>
                        <div className={styles.SigaNos}>
                            <h6>
                                Siga nos
                            </h6>
                        </div>
                        <div className={styles.Redes}>
                            <a href="https://wa.me/<1197373-5968>" target="_blank" className={styles.WhatsApp}>
                                <span></span>
                                <img src={WhatsApp} />
                            </a>
                            <a href="https://www.instagram.com/jose_jf1/" target="_blank" className={styles.Instagram}>
                                <span></span>
                                <img src={Instagram} />
                            </a>
                            <a href="https://twitter.com/choquei" target="_blank" className={styles.Twitter}>
                                <span></span>
                                <img src={Twitter} />
                            </a>
                        </div>
                        <div className={styles.Service}>
                            <img src={Service} />
                        </div>
                        <div className={styles.Contatos}>
                            <div className={styles.EmailIcon}>
                                <img src={Email} />
                            </div>
                            <div className={styles.Email}>
                                <li>
                                   servicemy@outlook.com
                                </li>
                            </div>
                            <div className={styles.WhatsIcon}>
                                <img src={WhatsIcon} />
                            </div>
                            <div className={styles.Whats}>
                                <li>
                                    (11)99999-9999
                                </li>
                            </div>
                        </div>
                        <div className={styles.FundoFoooter}></div>
                        <div className={styles.Rodape}></div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
export default Home;
