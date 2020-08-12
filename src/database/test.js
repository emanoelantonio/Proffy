const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {

    // Inserir dados
    proffyValue = {

        name: "Emanoel Antonio", 
        avatar: "https://avatars2.githubusercontent.com/u/60781248?s=460&u=43dbba3483d275c3d8964df24a8f5139f53dc282&v=4", 
        whatsapp: "81977776666", 
        bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
        
    }

    classValue = {
        subject: 1, 
        cost: "300" 
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrar a class
    {
        weekday: 1, 
        time_from: 720, 
        time_to: 1220
    },
    {
        weekday: 0, 
        time_from: 520, 
        time_to: 1220
    }
]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})


    // Consultar dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário do time_from (h) precisa ser <= ao solicitado pelo aluno
    // e o time_to precisa ser acima.
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
 
    `)

    // console.log(selectClassesSchedules)
})