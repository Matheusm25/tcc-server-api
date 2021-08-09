interface ExistsTypeValidation {
  column?: string;
  table: string;
  where?: any;
}

interface MetaColumnValidation {
  required?: boolean;
  unique?: boolean;
  type: string;
  email?: boolean;
  name: string;
  exists?: ExistsTypeValidation;
}

export default MetaColumnValidation;
