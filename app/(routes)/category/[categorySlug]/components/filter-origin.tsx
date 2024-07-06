import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterType } from "@/types/filters";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props : FilterOriginProps) => {
    const { setFilterOrigin } = props;
    const { result, loading } : FilterType = useGetProductField()
    // console.log(result)
    return ( 
        <div className="my-5">
            <p className="mb-3 font-bold">Marcas</p>
            {loading && result == null && (
                <p>Cargando Marcas...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result != null && result.schema.attributes.marca.enum.map((marca : string) => (
                    <div key={marca} className="flex items-center space-x-2">
                        <RadioGroupItem value={marca} id={marca} />
                        <Label htmlFor={marca}>{marca}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
     );
}
 
export default FilterOrigin;