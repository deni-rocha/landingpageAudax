import React, { TextareaHTMLAttributes, useState } from 'react'

const initialState = {
  email: '',
  nome: '',
  empresa: '',
  assunto: '',
  textArea: '',
  captcha: ''
}

const endState = {
  email: 'eu.denilsonrocha@gmail.com',
  nome: 'denilson rocha',
  empresa: 'audax company',
  assunto: 'vaga dev',
  textArea: 'quero muito uma vaga',
  captcha: 'false'
}

const Form = () => {
  const [formValues, setFormValues] = useState(initialState)

  function handleTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target
    updateData(name, value)
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value, type, checked } = e.target
    const isCheckbox = type === 'checkbox'

    if (isCheckbox) {
      console.log('sim, é um checkbox!', checked)

      value = checked ? 'aceito' : 'recusado'
    }

    updateData(name, value)
  }

  function updateData(name: string, value: string) {
    setFormValues({ ...formValues, [name]: value })
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    const { nome, empresa, assunto, textArea, captcha } = formValues
    e.preventDefault()

    if (captcha !== 'aceito') return alert('por obséquio passe pelo captcha :)')
    if (nome.length === 0) return alert('por favor corrija seu e-mail')
    if (empresa.length === 0)
      return alert('por favor colocar o nome da empresa')
    if (assunto.length < 3) return alert('por gentileza nos informe o assunto')
    if (textArea.length < 3) return alert('por favor nos conte mais detalhes')

    alert('Eviado! Obrigado, daremos retorno em breve.')
    setFormValues(initialState)
  }
  return (
    <section className="bg-textPrimary">
      <section
        className="text-bgDefault flex flex-col items-center gap-8 mt-16 
      w-10/12 mx-auto
      md:w-8/12
    "
      >
        <h2 className="font-bold font-roboto text-center text-lg w-60 ">
          Sed ut perspiciatis unde omnis iste natus error.
        </h2>
        <form
          onSubmit={submitForm}
          className="
        text-center text-xs w-10/12 font-inter space-y-4
        md:text-sm
        "
        >
          <input
            value={formValues.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            className="p-2 pl-7 h-10 w-full placeholder:text-bgDefault rounded-2xl bg-gray-200"
          />
          <div className="flex justify-between items-center gap-2">
            <input
              value={formValues.nome}
              onChange={handleChange}
              type="text"
              name="nome"
              placeholder="Nome"
              className="p-2 pl-7 h-10 w-full placeholder:text-bgDefault rounded-2xl bg-gray-200"
            />
            <input
              value={formValues.empresa}
              onChange={handleChange}
              type="text"
              name="empresa"
              placeholder="Empresa"
              className="p-2 pl-7 h-10 w-full placeholder:text-bgDefault rounded-2xl bg-gray-200"
            />
          </div>
          <input
            value={formValues.assunto}
            onChange={handleChange}
            type="text"
            name="assunto"
            placeholder="Assunto"
            className="p-2 pl-7 h-10  w-full placeholder:text-bgDefault rounded-2xl bg-gray-200"
          />
          <textarea
            name="textArea"
            value={formValues.textArea}
            onChange={handleTextArea}
            className="bg-gray-200 w-full h-40 p-2"
          ></textarea>

          <div className="w-full justify-between flex xs:flex-col  items-center xs:space-y-4 gap-1">
            <label
              className="cursor-pointer
              bg-gray-200 w-40 p-3
              rounded-2xl"
            >
              <input
                onChange={handleChange}
                name="captcha"
                type="checkbox"
                value={formValues.captcha}
                className="mr-2"
              />
              Não sou um robô
            </label>

            <input
              type="submit"
              value="Entre em contato"
              className="w-40 p-3 cursor-pointer bg-btnColorGreen rounded-2xl drop-shadow-xl text-textPrimary font-bold"
            />
          </div>
        </form>
      </section>
    </section>
  )
}

export default Form
