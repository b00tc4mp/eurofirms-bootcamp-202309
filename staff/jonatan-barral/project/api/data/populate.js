const mongoose = require('mongoose')
const { User, Competition, Competitor, Horse, Test, Reprise, Exercise, CollectiveNote, Failure, Mark, CollectiveMark, GeneralComent } = require('./models')

const { Types: { ObjectId } } = mongoose


mongoose.connect('mongodb://127.0.0.1:27017/jonatantest')
    .then(() => {
        return mongoose.connection.db.dropDatabase()
    })
    .then(() => {
        const administrador = new User({ name: 'jonatan', userName: 'Adminj', password: 't3st34nd0', role: 'Administrador', })

        const secretary = new User({ name: 'Secretary Test', userName: 'secretaritest', password: 't3st34nd0', role: 'Secretaría' })

        const juez1 = new User({ name: 'Pepito Grillo', userName: 'PGrillo', password: 't3st34ndo', role: 'Juez C' })

        const juez2 = new User({ name: 'Super Man', userName: 'SMan', password: 't3st34nd0', role: 'Juez' })

        const juez3 = new User({ name: 'Peter Pan', userName: 'PPan', password: 't3st34nd0', role: 'Juez' })

        return Promise.all([administrador.save(), juez1.save(), juez2.save(), juez3.save(), secretary.save()])

            .then(users => {
                const [, juez1, juez2, juez3, secretary] = users

                const competitor1 = new Competitor({ fullName: 'Jonatan Barral Otero', license: '002626' })

                return competitor1.save()
                    .then(competitor => {
                        const horse1 = new Horse({ name: 'Bambola de Ymas', license: '128593' })

                        return horse1.save()
                            .then(horse => {
                                const competition1 = new Competition({ date: '20/08/2020', organizer: secretary._id, judges: juez2._id, judges: juez3._id, president: juez1._id, competitors: competitor._id, horses: horse._id, location: 'Cambre' })

                                return competition1.save()

                                    .then(competition => {
                                        const paralimpicGradeIVGPB = new Reprise({ type: 'Grado IV Gran Premio B' })

                                        return paralimpicGradeIVGPB.save()

                                            .then(reprise => {
                                                const exercise1 = new Exercise({ reprise: reprise._id, order: 1, letters: "A X XC C", movements: 'Entrada al trote reunido Parada, inmovilidad y saludo Partir al trote reunido Trote reunido Pista a mano derecha', directives: 'Calidad del aire, parada y transiciones. Inmovilidad. Rectitud. Contacto y posición de la nuca.' })

                                                const exercise2 = new Exercise({ reprise: reprise._id, order: 2, letters: 'MB', movements: '1 Bucle de 5 m', directives: 'Regularidad y calidad del trote, reunión y equilibrio. Incurvación, tamaño y trazado del bucle.' })

                                                const exercise3 = new Exercise({ reprise: reprise._id, order: 3, letters: 'B', movements: 'Vuelta a la derecha de 10 m de 0', directives: 'Regularidad y calidad del trote. Incurvación, tamaño y trazado de la vuelta. Reunión, equilibrio y fluidez.' })

                                                const exercise4 = new Exercise({ reprise: reprise._id, order: 4, letters: 'BK K', movements: 'Trote medio Trote reunido', directives: 'Regularidad, elasticidad, equilibrio, remetimiento de los posteriores, alargamiento de los trancos y actitud de la línea superior.' })

                                                const exercise5 = new Exercise({ reprise: reprise._id, order: 5, letters: 'KAF', movements: 'Transiciones en B y K Trote reunido', directives: 'Mantenimiento del ritmo, fluidez, precisión y suavidad en la ejecución de las transiciones. Cambio de actitud. Calidad del trote.' })

                                                const exercise6 = new Exercise({ reprise: reprise._id, order: 6, letters: 'FB', movements: 'Espalda adentro a la izquierda', coefficient: 2, directives: 'Regularidad y calidad del trote. Incurvación y constancia del ángulo. Remetimiento, equilibrio y fluidez.' })

                                                const exercise7 = new Exercise({ reprise: reprise._id, order: 7, letters: 'BRMC', movements: 'Trote reunido', directives: 'Regularidad y calidad del trote. Reunión. Remetimiento.' })

                                                const exercise8 = new Exercise({ reprise: reprise._id, order: 8, letters: 'C CH', movements: 'Parada. 4 pasos atrás, proceder inmediatamente al trote reunido. Trote reunido', directives: 'Calidad de la parada y las transiciones. Inmovilidad, transiciones. Minuciosidad, fluidez, rectitud. Precisión en el número de pasos diagonales.' })

                                                const exercise9 = new Exercise({ reprise: reprise._id, order: 9, letters: 'HE', movements: '1 Bucle de 5 m', directives: 'Regularidad y calidad del trote, reunión y equilibrio. Incurvación, tamaño y trazado del bucle.' })

                                                const exercise10 = new Exercise({ reprise: reprise._id, order: 10, letters: 'E', movements: 'Vuelta a la izquierda de 10 m de 0', directives: 'Regularidad y calidad del trote. Incurvación, tamaño y trazado de la vuelta. Reunión, equilibrio y fluidez.' })

                                                const exercise11 = new Exercise({ reprise: reprise._id, order: 11, letters: 'EF', movements: 'Trote medio', directives: 'Regularidad, elasticidad, equilibrio, remetimiento de los posteriores, alargamiento de los trancos y actitud de la línea superior.' })

                                                const exercise12 = new Exercise({ reprise: reprise._id, order: 12, letters: 'FAK', movements: 'Transiciones en E y F Trote reunido', directives: 'Regularidad y calidad del trote, elasticidad, remetimiento de los posteriores, alargamiento y acortamiento de los trancos y actitud de la línea superior.' })

                                                const exercise13 = new Exercise({ reprise: reprise._id, order: 13, letters: 'KE', movements: 'Espalda adentro a la derecha', coefficient: 2, directives: 'Regularidad y calidad del trote. Incurvación y constancia del ángulo. Remetimiento, equilibrio y fluidez.' })

                                                const exercise14 = new Exercise({ reprise: reprise._id, order: 14, letters: 'Entre E y S S SE', movements: 'Transición al paso medio. Giro sobre los posteriores a la derecha', directives: 'Transiciones desde el trote reunido hacia el paso medio. Regularidad, actividad, tamaño, flexión e incurvación en el giro. Tendencia hacia delante, mantenimiento de los 4 tiempos.' })

                                                const exercise15 = new Exercise({ reprise: reprise._id, order: 15, letters: 'EB BR', movements: 'Semicírculo de 20 m de 0 al paso largo, Paso medio', directives: 'Regularidad, soltura del dorso, actividad, libertad de la espalda, estiramiento hacia la embocadura. Diferenciación con el paso medio. Transiciones.' })

                                                const exercise16 = new Exercise({ reprise: reprise._id, order: 16, letters: 'R RB', movements: 'Giro sobre los posteriores a la izquierda. Paso medio', directives: 'Regularidad, actividad, tamaño, flexión e incurvación en el giro. Tendencia hacia delante, mantenimiento de los 4 tiempos.' })

                                                const exercise17 = new Exercise({ reprise: reprise._id, order: 17, letters: 'B BF F FA', movements: 'Transiciones al trote reunido. Trote reunido Transiciones al galope reunido a la derecha. Galope reunido', directives: 'Prontitud y fluidez desde el paso medio hacia el trote reunido y desde el trote reunido al galope reunido. Calidad del trote y del galope, reunión y contacto.' })

                                                const exercise18 = new Exercise({ reprise: reprise._id, order: 18, letters: 'A A', movements: 'Círculo de 20 m al galope medio Galope Reunido', directives: 'Calidad del galope, impulsión, alargamiento de la actitud de la línea superior y de los trancos, tendencia cuesta arriba y equilibrio.' })

                                                const exercise19 = new Exercise({ reprise: reprise._id, order: 19, letters: 'AKV', movements: 'Transiciones en A Galope reunido', directives: 'Mantenimiento del ritmo, fluidez, precisión y suavidad en la ejecución de las transiciones. Cambio de actitud de la línea superior. Calidad del galope.' })

                                                const exercise20 = new Exercise({ reprise: reprise._id, order: 20, letters: 'VXR', movements: 'Cambio de galope de derecha a izquierda, pasando por 3-5 trancos de trote a la altura de X', coefficient: 2, directives: 'Prontitud, fluidez y equilibrio en ambas transiciones en el cambio, calidad del galope y reunión.' })

                                                const exercise21 = new Exercise({ reprise: reprise._id, order: 21, letters: 'RMCH', movements: 'Galope reunido', directives: 'Regularidad y calidad del galope. Reunión. Remetimiento' })

                                                const exercise22 = new Exercise({ reprise: reprise._id, order: 22, letters: 'HXK', movements: '1 bucle de 10 m a pasando por X sin cambio de mano Galope reunido', coefficient: 2, directives: 'Regularidad y calidad del galope, incurvación, tamaño y trazado del bucle, fluidez y equilibrio, reunión y capacidad para sostenerse por si mismo' })

                                                const exercise23 = new Exercise({ reprise: reprise._id, order: 23, letters: 'A A', movements: 'Círculo de 20 m de 0 al galope medio. Galope reunido.', directives: 'Calidad del galope, impulsión, alargamiento de la actitud de la línea superior y de los trancos, tendencia cuesta arriba y equilibrio.' })

                                                const exercise24 = new Exercise({ reprise: reprise._id, order: 24, letters: 'AFP', movements: 'Transiciones en A Galope reunido', directives: 'Mantenimiento del ritmo, fluidez, precisión y ejecución suave de las transiciones. Cambio de actitud de la línea superior. Calidad del galope.' })

                                                const exercise25 = new Exercise({ reprise: reprise._id, order: 25, letters: 'PXS', movements: 'Cambio de galope de izquierda a derecha, pasando por 3-5 trancos de trote a la altura de X', coefficient: 2, directives: 'Prontitud, fluidez y equilibrio en ambas y transiciones en el cambio, calidad del galope y reunión.' })

                                                const exercise26 = new Exercise({ reprise: reprise._id, order: 26, letters: 'SHCM', movements: 'Galope reunido', directives: 'Regularidad y calidad del galope. Reunión. Remetimiento.' })

                                                const exercise27 = new Exercise({ reprise: reprise._id, order: 27, letters: 'MXF FA', movements: '1 bucle de 10 m a pasando por X sin cambio de mano Galope reunido', coefficient: 2, directives: 'Regularidad y calidad del galope, incurvación, tamaño y trazado del bucle, fluidez y equilibrio, reunión y capacidad para sostenerse por si mismo' })

                                                const exercise28 = new Exercise({ reprise: reprise._id, order: 28, letters: 'A X XG', movements: 'Doblar por línea central Transición al trote reunido Trote reunido', directives: 'Equilibrio al doblar, rectitud, precisión y suavidad en la transición al trote reunido. Calidad del trote. Reunión' })

                                                const exercise29 = new Exercise({ reprise: reprise._id, order: 29, letters: 'G', movements: 'Parada, Inmovilidad y Saludo', directives: 'Transición a la parada. Rectitud, contacto y posición de la nuca.' })

                                                return Promise.all([exercise1.save(), exercise2.save(), exercise3.save(), exercise4.save(), exercise5.save(), exercise6.save(), exercise7.save(), exercise8.save(), exercise9.save(), exercise10.save(), exercise11.save(), exercise12.save(), exercise13.save(), exercise14.save(), exercise15.save(), exercise16.save(), exercise17.save(), exercise18.save(), exercise19.save(), exercise20.save(), exercise21.save(), exercise22.save(), exercise23.save(), exercise24.save(), exercise25.save(), exercise26.save(), exercise27.save(), exercise28.save(), exercise29.save()])
                                                    .then(exercises => {
                                                        const [exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9, exercise10, exercise11, exercise12, exercise13, exercise14, exercise15, exercise16, exercise17, exercise18, exercise19, exercise20, exercise21, exercise22, exercise23, exercise24, exercise25, exercise26, exercise27, exercise28, exercise29] = exercises

                                                        const collectiveNote1 = new CollectiveNote({ reprise: reprise._id, order: 1, aspects: 'Impresión General:        - Presentación armoniosa del binomio.        - Tacto y habilidades ecuestres del/la         deportista (discreción y efectividad en el         uso de las ayudas) - Precisión.', coefficient: 2 })

                                                        return collectiveNote1.save()

                                                            .then(collectiveNote => {
                                                                const test1 = new Test({ competition: competition._id, trial: 'Oficial', level: 'Doma Paralímpica', reprise: reprise._id })

                                                                return test1.save()
                                                                    .then(test => {

                                                                        const markH1 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise1._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markH2 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise2._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH3 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise3._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH4 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise4._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH5 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise5._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH6 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise6._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markH7 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise7._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        // markH7.failures.push(new Failure({ comment: '' }))

                                                                        const markH8 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise8._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 4 })

                                                                        const markH9 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise9._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH10 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise10._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH11 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise11._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH12 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise12._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH13 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise13._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH14 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise14._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 5.5 })

                                                                        const markH15 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise15._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markH16 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise1._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markH17 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise17._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        const markH18 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise18._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markH19 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise19._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH20 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise20._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        const markH21 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise21._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        const markH22 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise22._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markH23 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise23._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH24 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise24._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markH25 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise25._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        const markH26 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise26._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markH27 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise27._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markH28 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise28._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        const markH29 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise29._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 5.5 })

                                                                        const markC1 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise1._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6.5, coment: 'rectitud' })

                                                                        const markC2 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise2._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6, coment: 'No toca pista, esquina' })

                                                                        const markC3 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise3._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7.5 })

                                                                        const markC4 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise4._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6, coment: 'Alargamiento trancos y línea superior' })

                                                                        const markC5 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise5._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 5, coment: 'Cambio de actitud' })

                                                                        const markC6 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise6._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7, coment: 'esquina' })

                                                                        const markC7 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise7._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        // markC7.failures.push(new Failure({ comment: '' }))

                                                                        const markC8 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise8._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 3, coment: 'Sin parada, se tuerce' })

                                                                        const markC9 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise9._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7, coment: 'Esquina' })

                                                                        const markC10 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise10._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6, coment: 'No llega a pista' })

                                                                        const markC11 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise11._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 5, coment: 'trazado, alargamiento trancos' })

                                                                        const markC12 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise12._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 5, coment: 'No hay transición' })

                                                                        const markC13 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise13._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6, coment: 'Fluidez, ángulo no constante' })

                                                                        const markC14 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise14._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 4, coment: 'actividad, se para' })

                                                                        const markC15 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise15._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 5.5, coment: 'regularidad, estiramiento hacia la embocadura' })

                                                                        const markC16 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise16._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        const markC17 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise17._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7.5 })

                                                                        const markC18 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise18._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6, coment: 'Trazado, alargamiento trancos' })

                                                                        const markC19 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise19._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markC20 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise20._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6.5, coment: 'precisión, después de X' })

                                                                        const markC21 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise21._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6, coment: 'Esquina, equilibrio, se tumba' })

                                                                        const markC22 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise22._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 4, coment: 'trota al entrar en pista' })

                                                                        const markC23 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise23._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6, coment: 'Trazado' })

                                                                        const markC24 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise24._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 5, coment: 'No hay transición' })

                                                                        const markC25 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise25._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6.5, coment: 'Precisión, antes de S' })

                                                                        const markC26 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise26._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6.5, coment: 'Esquinas' })

                                                                        const markC27 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise27._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 4, coment: 'se desune, entra en P' })

                                                                        const markC28 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise28._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7, })

                                                                        const markC29 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise29._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 6.5, coment: 'Para progresivo' })

                                                                        const markB1 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise1._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markB2 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise2._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markB3 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise3._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markB4 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise4._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markB5 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise5._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB6 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise6._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB7 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise7._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        // markB7.failures.push(new Failure({ comment: '' }))

                                                                        const markB8 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise8._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 4 })

                                                                        const markB9 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise9._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB10 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise10._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markB11 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise11._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB12 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise12._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5.5 })

                                                                        const markB13 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise13._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5.5 })

                                                                        const markB14 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise14._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markB15 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise15._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markB16 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise16._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markB17 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise17._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markB18 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise18._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markB19 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise19._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markB20 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise20._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5.5 })

                                                                        const markB21 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise21._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB22 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise22._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markB23 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise23._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB24 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise24._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5 })

                                                                        const markB25 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise25._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 5.5 })

                                                                        const markB26 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise26._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const markB27 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise27._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB28 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise28._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        const markB29 = new Mark({ competition: competition._id, test: test1._id, reprise: reprise._id, exercise: exercise29._id, judge: juez1._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        return Promise.all([markH1.save(), markH2.save(), markH3.save(), markH4.save(), markH5.save(), markH6.save(), markH7.save(), markH8.save(), markH9.save(), markH10.save(), markH11.save(), markH12.save(), markH13.save(), markH14.save(), markH15.save(), markH16.save(), markH17.save(), markH18.save(), markH19.save(), markH20.save(), markH21.save(), markH22.save(), markH23.save(), markH24.save(), markH25.save(), markH26.save(), markH27.save(), markH28.save(), markH29.save(), markC1.save(), markC2.save(), markC3.save(), markC4.save(), markC5.save(), markC6.save(), markC7.save(), markC8.save(), markC9.save(), markC10.save(), markC11.save(), markC12.save(), markC13.save(), markC14.save(), markC15.save(), markC16.save(), markC17.save(), markC18.save(), markC19.save(), markC20.save(), markC21.save(), markC22.save(), markC23.save(), markC24.save(), markC25.save(), markC26.save(), markC27.save(), markC28.save(), markC29.save(), markB1.save(), markB2.save(), markB3.save(), markB4.save(), markB5.save(), markB6.save(), markB7.save(), markB8.save(), markB9.save(), markB10.save(), markB11.save(), markB12.save(), markB13.save(), markB14.save(), markB15.save(), markB16.save(), markB17.save(), markB18.save(), markB19.save(), markB20.save(), markB21.save(), markB22.save(), markB23.save(), markB24.save(), markB25.save(), markB26.save(), markB27.save(), markB28.save(), markB29.save()])

                                                                    })
                                                                    .then(marks => {
                                                                        const collectiveMarkH = new CollectiveMark({ competition: competition._id, test: test1._id, reprise: reprise._id, collectiveNote: collectiveNote1._id, judge: juez2._id, judgePosition: "H", competitor: competitor._id, horse: horse._id, mark: 6.5 })

                                                                        const collectiveMarkC = new CollectiveMark({ competition: competition._id, test: test1._id, reprise: reprise._id, collectiveNote: collectiveNote1._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, mark: 7 })

                                                                        const collectiveMarkB = new CollectiveMark({ competition: competition._id, test: test1._id, reprise: reprise._id, collectiveNote: collectiveNote1._id, judge: juez3._id, judgePosition: "B", competitor: competitor._id, horse: horse._id, mark: 6 })

                                                                        return Promise.all([collectiveMarkB.save(), collectiveMarkC.save(), collectiveMarkH.save()])
                                                                    })
                                                                    .then(CollectiveMarks => {
                                                                        const generalComentC = new GeneralComent({ competition: competition._id, test: test1._id, reprise: reprise._id, judge: juez1._id, judgePosition: "C", competitor: competitor._id, horse: horse._id, coment: 'Deberías buscar más relajación y equibrio en las transiciones, especialmente en la del cambio de mano a galope' })

                                                                        return generalComentC.save
                                                                    })
                                                            })
                                                    })
                                            })
                                    })

                            })
                    })
            })
    })
    .then(() => { console.log('saved') })
