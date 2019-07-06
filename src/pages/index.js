import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default () => {
    const projects = [
        {
            image: "https://images.unsplash.com/photo-1547480053-7d174f67b557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            title: "TodoList",
            desciption: "React, Redux, Boostrap, React-router",
            github: "https://github.com/JesseHenson/Not_your_average_todo",
            example: "https://not-your-average-todo.netlify.com/",
            disabled: false,
            details: {
                text: "Sorting, filtering, searching capabilities. Will have auth and a way to save todos."
            }
        },
        {
            image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            title: "Tech Blog",
            desciption: "Right now pretty bare. I'm going to redo in gatsby using config to build pages from markdown in site files",
            github: "https://github.com/JesseHenson/Techs_guide_to_the_Galaxy",
            example: "https://techs-guide-to-the-galaxy.netlify.com/",
            disabled: false,
            details: {
                text: "Looking to completely redo with gatsby, graphQL and bootstrap"
            }
        },
        {
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            title: "HackerNews",
            desciption: "React-Bootstrap, fetch, soon: Axios, graphQL",
            github: "https://github.com/JesseHenson/hacker-news",
            example: "https://not-your-average-todo.netlify.com/",
            disabled: true,
            details: {
                text: "Future plans include, connections to graphQL, ability to leave comments, sign in, favorite newsStories and users, search by users... so much more"
            }
        },
        {
            image: "https://images.unsplash.com/photo-1485389630172-dac32ee0e253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            title: "Markdown",
            desciption: "Redux, Firebase, React, React-Markdown, Styled-components",
            github: "https://github.com/JesseHenson/markdown_guide",
            example: "https://markdown-guide-with-ref.netlify.com/",
            disabled: false,
            details: {
                text: "Automatically changes your work to markdown on preview screen. Plans include responsive design, toggle previewer, full markdown reference guide..."
            }
        },
        {
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            title: "Calculator",
            desciption: "Replicates the ios12 calculator, all functions done vanilla",
            github: "https://github.com/JesseHenson/Calculator",
            example: "https://ios12replicacalculator.netlify.com/",
            disabled: false,
            details: {
                text: "to come... animation for buttons and operations being marked... for better user experience"
            }
        },

    ]
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio</title>
            </Helmet>
            <style jsx>{`
                .card {
                    width: 20rem;
                }
                .card-img-top {
                    max-height: 200px;
                }
            `} 
            </style>
            <div className="d-flex flex-column align-items-center w-100 mb-5">
                <h1 className="my-4">
                    Jesse Henson
                </h1>
                <p>
                    React, GraphQL, Gatsby, Python... VBA??? 
                </p>
            </div>
            <div className="d-flex justify-content-around flex-wrap mb-5">
                {projects.map(project=>(
                    <div className="card mb-5 mx-5" >
                        <img src={project.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.desciption}</p>
                            <a href={project.github} target="blank" className="btn rounded btn-dark mx-1">Github</a>
                            <a href={project.example} target="blank" className={` ${project.disabled ? "disabled" : null} btn rounded btn-dark mx-1`}>Example</a>
                            <a href="#" target="blank" className="btn rounded btn-dark mx-1">Details</a>
                        </div>
                    </div>
                ))}
            </div>
            <nav className="navbar sticky-bottom navbar-dark bg-dark ">
                <a className="navbar-brand ml-2" target="blank" href="mailto:henson.jhenson.jesse@gmail.com">Email</a>
                <a className="navbar-brand mr-2" target="blank" href="https://github.com/JesseHenson">Github</a>
            </nav>
        </React.Fragment>
    )


}
