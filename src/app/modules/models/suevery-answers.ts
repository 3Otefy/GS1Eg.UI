export interface SueveryAnswers {
    mobileNumber: string,
    serviceType: string,
    surveyId: number,
    customerName?: string,
    companyName?: string,
    userAnswers?: UserAnswers[]
}
export interface UserAnswers {
    questionId: number,
    userAnswer: string
}