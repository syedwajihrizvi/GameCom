interface PlanDetail {
    name: string,
    value: string
}

export interface Plan {
    title: string,
    quality: string,
    values: PlanDetail[]
}