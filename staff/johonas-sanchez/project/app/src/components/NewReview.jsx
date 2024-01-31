import Container from "../library/Container"
import Field from "../library/Field"
import Form from "../library/Form"

import logic from '../logic'


function NewReview(props) {
   console.log("NewReview")

   function handleNewReviewSubmit(event) {
      event.preventDefault()

      const commentInput = event.target.querySelector("#comment-field")
      const valuationInput = event.target.querySelector("#valuation-field")

      const comment = commentInput.value
      const valuation = parseFloat(valuationInput.value)  // Convertir a número, siempre lo almacena como string

      logic.createReview(comment, valuation, props.parkingId)
         .then(() => {
            // Manejar la creación exitosa de la revisión
            console.log("Review created")
            props.onNewReviewSubmit()
         })
         .catch((error) => {
            // Manejar el error
            console.error("Error creating review:", error)
            props.onError(error)
         })
      }

   function handleCancelClick() {
      props.onNewReviewCancelClick()
   }

   return (
      <Container align="center" className="my-8">
         <h2 className="font-bold">New review</h2>

         <Form onSubmit={handleNewReviewSubmit}>
            <Field type="text" id="comment-field" required>
               Comment
            </Field>

            <Field type="number" id="valuation-field" required>
               Valuation
            </Field>

            <button className="bg-blue-500 text-white px-2 py-1 rounded mt-3" type="submit">Review</button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded mt-3" onClick={handleCancelClick}>Cancel</button>
         </Form>
      </Container>
   )
}

export default NewReview
