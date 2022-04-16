namespace Builder
{
    public class Taco
    {
        public string? Meat { get; set; } = "None";
        public string? Cheese { get; set; } = "None";
        public string? Shell { get; set; } = "None";
        public bool? Vegan { get; set; } = false;
        public bool? Salad { get; set; } = false;



        public class Builder
        {
            private readonly Taco _taco = new();

            public Builder Meat(string meat)
            {
                _taco.Meat = meat;
                return this;
            }

            public Builder Cheese(string cheese)
            {
                _taco.Cheese = cheese;
                return this;
            }

            public Builder Shell(string shell)
            {
                _taco.Shell = shell;
                return this;
            }

            public Builder Vegan(bool vegan)
            {
                _taco.Vegan = vegan;
                return this;
            }

            public Builder Salad(bool salad)
            {
                _taco.Salad = salad;
                return this;
            }

            public Taco Build()
            {
                return _taco;
            }
        }

        public override string ToString()
        {
            return $"Taco\n{nameof(Meat)}: {Meat}, {nameof(Cheese)}: {Cheese}, {nameof(Shell)}: {Shell}, {nameof(Vegan)}: {Vegan}, {nameof(Salad)}: {Salad}";
        }
    }
}
