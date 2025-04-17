import { Product } from '@/data/products';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';

const ProductMetadata = ({ product }: { product: Product }) => {
    return (
        <section id="metadata" className="space-y-2">
            <h2 className="text-xl font-medium">Características</h2>
            <Table>
                <TableBody>
                    {product.metadata.map((item, k) => (
                        <TableRow key={k}>
                            <TableCell className="p-4 font-medium">{item.key}</TableCell>
                            <TableCell className="p-4">{item.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    );
};

export { ProductMetadata };
