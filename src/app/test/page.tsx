import Emails from "@/shared/components/Emails/Emails"

export default function Test() {
    return <Emails 
                type="bike"
                name={ "name"}
                email={ "email"}
                phone={ "phone"}
                time={ "currentOrder?.time"}
                date={ "currentOrder?.date"}
                comment={ "comment"}
                total={ 100}
                discountCode={"code"}
                bike={{
                    small: 0,
                    medium: 1,
                    childrenBike: 2,
                }}
            />
}