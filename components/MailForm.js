import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form({ _id }) {
    const [formData, setFormData] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = async data => {
        // TODO: SendGridのAPIを叩く実装に変える。
        return;
        // setIsSubmitting(true)
        // let response
        // setFormData(data)
        // try {
        //   response = await fetch('/api/createComment', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     type: 'application/json'
        //   })
        //   setIsSubmitting(false)
        //   setHasSubmitted(true)
        // } catch (err) {
        //   setFormData(err)
        // }
    }

    if (isSubmitting) {
        return <h3>メール送信中...</h3>
    }
    if (hasSubmitted) {
        return (
            <>
                <h3>メールが正常に送信されました。</h3>
                <ul>
                    <li>
                        名前: {formData.name} <br />
          メールアドレス: {formData.email} <br />
          コメント: {formData.comment}
                    </li>
                </ul>
            </>)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-16 mx-10 md:mx-20 lg:mx-40" disabled>
            <input ref={register} type="hidden" name="_id" value={_id} />
            <label className="block mb-5">
                <span className="text-gray-700">名前</span>
                <input name="name" ref={register({ required: true })} className="shadow border rounded py-2 px-3 form-input mt-1 block w-1/3 placeholder-gray-400" placeholder="山田 太郎" />
            </label>
            <label className="block mb-5">
                <span className="text-gray-700">メールアドレス</span>
                <input name="email" type="email" ref={register({ required: true })} className="shadow border rounded py-2 px-3 form-input mt-1 block w-1/2 placeholder-gray-400" placeholder="your@email.com" />
            </label>
            <label className="block mb-5">
                <span className="text-gray-700">コメント</span>
                <textarea ref={register({ required: true })} name="comment" className="shadow border rounded py-2 px-3  form-textarea mt-1 block w-full placeholder-gray-400" rows="8" placeholder="お好きなコメントを入力下さい。"></textarea>
            </label>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" className="shadow bg-black hover:bg-yellow-400 hover:text-black text-white font-bold py-2 px-4 rounded cursor-pointer" />
        </form>
    )
}
